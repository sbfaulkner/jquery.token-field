# jquery.token-field

jquery plugin to deal with tokenized input (ie. tags or email addresses)

## Usage

1. Copy javascript, stylesheet and images to your project.

2. Include javascript and stylesheets in your html.

        <script src="/javascripts/jquery.js" type="text/javascript"></script>
        <script src="/javascripts/jquery.token-field.js" type="text/javascript"></script>
        <link rel="stylesheet" href="/stylesheets/token-field.css" type="text/css" media="screen">

3. Add textarea or input[type=text] to your html with comma-delimited values.

        <textarea class='email'>one@domain.com,two@other.net,three@somewhere.ca</textarea>

4. Invoke the plugin in your document ready handler.

        $(document).ready(function() {
          $('textarea.email').tokenField();
        });

## Options

### badToken
A callback function to implement behaviour when an token is invalid.

Default: clear the invalid token

### delimiters
A string containing the characters to recognize as delimiters for tokens.

Default: ', ' (ie. comma and/or space)

### max
The maximum number of values to allow.

Default: 0 (unlimited)

### nested
Set to true to preserve the legacy behaviour of token values being stored in multiple hidden
input elements with the same name.

Set to false to store token values in a single hidden input element with a comma-delimited value.

Default: false (single, comma-delimited value)

### regex
An alternate regular expression for validating values.

Default: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i (email address)

### tooMany
A callback function to implement behaviour when the number of tokens exceeds the maximum (if provided).

Default: clear the invalid token

## CHANGES

* __IMPORTANT__: An incompatability was introduced when nested input values were deprecated
  in favour of a single comma-delimited value. The original behaviour may be preserved using
  the nested option with a value of true. (2010/03/18)

## TODO

## Legal

**Author:** S. Brent Faulkner <brentf@unwwwired.net>  
**License:** Copyright &copy; 2010 unwwwired.net, released under the MIT license