---
layout: default
title: sbfaulkner/jquery.token-field @ GitHub
---

# [jquery.token-field](http://github.com/sbfaulkner/jquery.token-field) #

<p class='subtitle'>a tokenized input plugin for jquery</p>

The token-field plugin for jquery provides a convenient (and stylish!) way to collect lists of email addresses, tags, etc. on your forms. The default look and feel is liberally copied from Facebook's email address entry fields.

## Dependencies ##

* jquery

## Install ##

1. Copy javascript, stylesheet and images to your project.
2. Include javascript and stylesheets in your html.
3. Add textarea or input[type=text] to your html with comma-delimited values.
4. Invoke the plugin in your document ready handler.

## Example ##

<textarea class='email'>one@domain.com,two@other.net,three@somewhere.ca</textarea>

{% highlight html %}
<html>
  <head>
    <title>jquery.token example</title>
    <link rel="stylesheet" href="/stylesheets/token-field.css" type="text/css" media="screen">
    <script src="/javascripts/jquery.js" type="text/javascript"></script>
    <script src="/javascripts/jquery.token-field.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        $('textarea.email').tokenField();
      });
    </script>
  </head>
  <body>
    <textarea class='email'>one@domain.com,two@other.net,three@somewhere.ca</textarea>
  </body>
</html>
{% endhighlight %}

## Demo ##

[Here](demo.html) is a demo page with several examples.

## License ##

<p class='legal'>
  Copyright © 2010 unwwwired.net
</p>

<p class='legal'>
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
</p>

<p class='legal'>
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
</p>

<p class='legal'>
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Author ##

S. Brent Faulkner (brentf@unwwwired.net)

<script type="text/javascript">
  //<![CDATA[
  $(document).ready(function() {
    $('textarea.email').tokenField();
  });
  //]]>
</script>
