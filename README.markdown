# jquery.token-field

Add support for converting an English representation of elapsed time into seconds and back (with validation).

## Usage

1. Copy javascript, stylesheet and images to your project.

        <script src="/javascripts/jquery.js" type="text/javascript"></script>
        <script src="/javascripts/jquery.token-field.js" type="text/javascript"></script>
        <link rel="stylesheet" href="/stylesheets/token-field.css" type="text/css" media="screen">

2. Include javascript and stylesheets in your html.

3. Add textarea or input[type=text] to your html with comma-delimited values.

        <textarea class='email'>one@domain.com,two@other.net,three@somewhere.ca</textarea>

4. Invoke the plugin in your document ready handler.

        $(document).ready(function() {
          $('textarea.email').tokenField();
        });

## Options

### regex
Provide an alternate regular expression for validating values.

Default: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i (email address)

### max
Specify the maximum number of values to allow.

Default: 0 (unlimited)

## TODO

* make sure form submission is correct

## Legal

**Author:** S. Brent Faulkner <brentf@unwwwired.net>  
**License:** Copyright &copy; 2010 unwwwired.net, released under the MIT license