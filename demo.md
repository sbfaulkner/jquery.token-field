---
layout: default
title: jquery.token-field demo
---
<h1>jquery.token-field demo</h1>
<h2>Tokenized &lt;INPUT&gt;</h2>
<h3>Source</h3>
{% highlight html %}
<input type='text' id='input-test' size='100'
        value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<script>
$('#input-test').tokenField();
</script>
{% endhighlight %}
<h3>Result</h3>
<input type='text' id='input-test' size='100' value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<h2>Tokenized &lt;TEXTAREA&gt;</h2>
<h3>Source</h3>
{% highlight html %}
<textarea id='textarea-test' rows='6' cols='100'>
one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net
</textarea>
<script>
$('#textarea-test').tokenField();
</script>
{% endhighlight %}
<h3>Result</h3>
<textarea id='textarea-test' rows='6' cols='100'>
one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net
</textarea>
<h2>Tokenized &lt;INPUT&gt; with maximum of 3 tokens</h2>
<h3>Source</h3>
{% highlight html %}
<input type='text' id='max-test' size='100'
        value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<script>
$('#max-test').tokenField({max:3});
</script>
{% endhighlight %}
<h3>Result</h3>
<input type='text' id='max-test' size='100' value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<h2>Tokenized &lt;INPUT&gt; with phone number regex</h2>
<h3>Source</h3>
{% highlight html %}
<input type='text' id='phone-test' size='100' value='555-1212,(123) 555-1212'/>
<script>
$('#phone-test').tokenField({regex:/^(?:\([0-9]{3}\) ?)?[0-9]{3}\-[0-9]{4}$/});
</script>
{% endhighlight %}
<h3>Result</h3>
<input type='text' id='phone-test' size='100' value='555-1212,(123) 555-1212'/>
<h2>Tokenized &lt;INPUT&gt; with word regex</h2>
<h3>Source</h3>
{% highlight html %}
<input type='text' id='word-test' size='100'
        value='abc123,hello,foo-bar,no spaces,underscore_ok'/>
<script>
$('#word-test').tokenField({regex:/^[a-z][\w\-]+$/i});
</script>
{% endhighlight %}
<h3>Result</h3>
<input type='text' id='word-test' size='100' value='abc123,hello,foo-bar,no spaces,underscore_ok'/>
<script type="text/javascript">
  //<![CDATA[
  $(document).ready(function() {
    $('#input-test,#textarea-test').tokenField();
    $('#max-test').tokenField({max:3});
    $('#phone-test').tokenField({regex:/^(?:\([0-9]{3}\) ?)?[0-9]{3}\-[0-9]{4}$/});
    $('#word-test').tokenField({regex:/^[a-z][\w\-]+$/i});
  });
  //]]>
</script>
