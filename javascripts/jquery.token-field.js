(function($) {
  $.fn.tokenField = function(options) {
    var settings = {
       regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
       max: 0
    };

    if (options) $.extend(settings, options);

    function console_log(text) {
      try {
        console.log(text);
      } catch {
      }
    }

    function isToken(text) {
      return text.match(settings.regex);
    }

    function tokenHtml(text) {
      return "<a href='#' class='token'><span><span><span><span>"+text+"<input type='hidden' value='"+text+"'/><span href='#' class='token-x'>x</span></span></span></span></span></a>"
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
        .keypress(function(e) {
          $(this).next('.token-input-sizer').html($(this).val()+'###');
          if (e.which == 13 || e.which == 44) {
            $(this).blur();
            if (e.which == 44)
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
          if ((settings.max == 0 || $(this).closest('.token-input').siblings('.token').length < settings.max) && isToken($(this).val()))
            observeToken($(tokenHtml($(this).val())).insertBefore($(this).closest('.token-input')));
          $(this).val('');
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
            $(this).remove();
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
        $(this).closest('.token').remove();
        return false;
      });
    }

    return this.each(function(){
      var id = $(this).attr('id');
      var name = $(this).attr('name');
      // add token-field class before retrieving classes and style/size (so that any font changes are realized)
      $(this).addClass('token-field');
      var klass = $(this).attr('class');
      var style = 'min-height: '+$(this).css('height')+'; height: auto !important; height: '+$(this).css('height')+'; width: '+$(this).css('width');
      var tokens = $.map($(this).val().replace(/^\s*(.+)\s*$/,'$1').split(','), function(v) { if (isToken(v)) return tokenHtml(v); console_log('Warning: ignoring bad token - '+v); return null; });
      if (settings.max > 0 && tokens.length > settings.max) {
        console_log('Warning: ignoring extra tokens after maximum of '+settings.max);
        tokens = tokens.slice(0,settings.max);
      }
      observeTokenField($('<div></div>').attr({'class':klass,'id':id,'name':name,'style':style}).html(tokens.join('')+"<div class='token-input'><input type='text' size='1'/><span class='token-input-sizer'>###</span></div><div style='clear:both'></div>").replaceAll(this));
    });
  };
})(jQuery);
