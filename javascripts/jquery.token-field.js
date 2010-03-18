(function($) {
  $.fn.tokenField = function(options) {
    var settings = {
       regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
       delimiters: ', ',
       max: 0,
       nested: false,
       badToken: function() { $(this).val(''); },
       tooMany: function() { $(this).val(''); }
    };

    if (options) $.extend(settings, options);

    function console_log(text) {
      try {
        console.log(text);
      }
      catch(e) {
      }
    }

    function expandTokens(name, tokens) {
      return $.map(tokens, function(v) {
        return tokenHtml(name,v);
      }).join('');
    }

    function inputHtml(name) {
      return "<div class='token-input'><input type='text' size='1'/><span class='token-input-sizer'>###</span></div>";
    }

    function isDelimiter(ch) {
      return String.fromCharCode(ch).match(RegExp('['+settings.delimiters+']'));
    }

    function isToken(text) {
      return text.match(settings.regex);
    }

    function observeTokenField(tokenField) {
      // focus on input when tokenField clicked
      tokenField.click(function() {
        $('.token-input', this).siblings('.selected-token').removeClass('selected-token');
        $('.token-input input', this).focus();
        return false;
      });
      // adjust size as typing occurs and blur when comma or enter pressed (retaining focus for comma)
      $('.token-input input', tokenField)
        .keydown(function(e) {
          if (e.which == 9 && $(this).val()) {
            $(this).blur();
            $(this).focus();
            return false;
          }
          return true;
        })
        .keypress(function(e) {
          $(this).next('.token-input-sizer').html($(this).val()+'###');
          if (e.which == 13 || isDelimiter(e.which)) {
            $(this).blur();
            if (isDelimiter(e.which))
              $(this).focus();
            return false;
          }
          return true;
        })
        // adjust size as typing occurs
        .keyup(function() {
          $(this).next('.token-input-sizer').html($(this).val()+'###');
          return true;
        })
        // fix size when focus is returned
        .focus(function() {
          $(this).next('.token-input-sizer').html($(this).val()+'###');
          return true;
        })
        // "parse" and insert token, then clear the input field
        .blur(function(e) {
          if (!$(this).data('blur')) {
            $(this).data('blur', true);
            if (settings.max == 0 || $(this).closest('.token-input').siblings('.token').length < settings.max) {
              if (isToken($(this).val())) {
                observeToken($(tokenHtml($(this).attr('name'),$(this).val())).insertBefore($(this).closest('.token-input')));
                if (!settings.nested) {
                  var input = $(this).closest('.token-field').find('input:hidden');
                  var values = input.val().split(',');
                  values.splice(0, 0, $(this).val());
                  input.val(values.join(','));
                }
                $(this).val('');
              } else {
                if (settings.badToken) {
                  this.badToken = settings.badToken;
                  this.badToken();
                }
              }
            } else {
              if (settings.tooMany) {
                this.tooMany = settings.tooMany;
                this.tooMany();
              }
            }
            $(this).removeData('blur');
          }
          return true;
        });
      observeToken($('.token', tokenField));
    }

    function observeToken(token) {
      // select token when token clicked
      token.click(function() {
        $(this).focus();
        return false;
      })
      // remove token when selected and delete/backspace is clicked
      .keydown(function(e) {
        if ($(this).hasClass('selected-token')) {
          if (e.which == 8) {
            removeToken($(this));
            return false;
          }
        }
        return true;
      })
      // unselect when focus is lost
      .blur(function() {
        $(this).removeClass('selected-token');
      })
      // select when focused
      .focus(function() {
        $(this).siblings('.selected-token').removeClass('selected-token');
        $(this).addClass('selected-token');
      });
      // remove token when "x" clicked
      $('.token-x', token).click(function() {
        $(this).closest('.token').siblings('.selected-token').removeClass('selected-token');
        removeToken($(this).closest('.token'));
        return false;
      });
    }

    function parseTokens(text) {
      text = text.replace(/^\s*(.+)\s*$/,'$1');
      if (!text) return [];
      return $.map(text.split(','), function(v) {
        if (isToken(v)) return v;
        console_log('Warning: ignoring bad token - '+v);
        return null;
      });
    }

    function removeToken(token) {
      if (!settings.nested) {
        var index = token.siblings('.token').andSelf().index(token);
        var input = token.closest('.token-field').find('input:hidden');
        var values = input.val().split(',');
        values.splice(index, 1);
        input.val(values.join(','));
      }
      token.remove();
    }

    function tokenHtml(name,text) {
      return "<a href='#' class='token'><span><span><span><span>"
              + text
              + (settings.nested ? "<input type='hidden' value='"+text+"' name='"+name+"'/>" : "")
              + "<span href='#' class='token-x'>x</span></span></span></span></span></a>";
    }

    return this.each(function(){
      var id = $(this).attr('id');
      var name = $(this).attr('name');
      var klass = $(this).attr('class');
      var style = '';
      var tokens = parseTokens($(this).val());
      if ($(this).height() > 0)
        style = style + 'min-height: '+$(this).height()+'px; height: auto !important; height: '+$(this).height()+'px;';
      if ($(this).width() > 0)
        style = style + 'width: '+$(this).width()+'px;';
      if (settings.max > 0 && tokens.length > settings.max) {
        console_log('Warning: ignoring extra tokens after maximum of '+settings.max);
        tokens = tokens.slice(0,settings.max);
      }
      var field = $('<div></div>')
        .attr({'class':klass,'id':id,'style':style})
        .addClass('token-field')
        .append(expandTokens(name, tokens))
        .append(inputHtml(name))
        .append("<div style='clear:both'></div>")
        .replaceAll(this);
      if (!settings.nested)
        field.prepend("<input type='hidden' value='"+tokens.join(',')+"' name='"+name+"'/>")
      observeTokenField(field);
    });
  };
})(jQuery);
