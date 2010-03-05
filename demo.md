---
layout: default
title: jquery.token-field demo
---
# jquery.token-field demo #

## Tokenized &lt;INPUT&gt; ##

### Source ###

{% highlight html %}
<input type='text' id='input-test'
        value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<script>
$('#input-test').tokenField();
</script>
{% endhighlight %}

### Result ###

<input type='text' id='input-test' value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>

## Tokenized &lt;TEXTAREA&gt; ##

### Source ###

{% highlight html %}
<textarea id='textarea-test'>
one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net
</textarea>
<script>
$('#textarea-test').tokenField();
</script>
{% endhighlight %}

### Result ###

<textarea id='textarea-test'>
one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net
</textarea>

## Tokenized &lt;INPUT&gt; with maximum of 3 tokens ##

### Source ###

{% highlight html %}
<input type='text' id='max-test'
        value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>
<script>
$('#max-test').tokenField({max:3});
</script>
{% endhighlight %}

### Result ###

<input type='text' id='max-test' value='one@first.net,two@second.net,three@third.net,four@fourth.net,five@fifth.net'/>

## Tokenized &lt;INPUT&gt; with phone number regex ##

### Source ###

{% highlight html %}
<input type='text' id='phone-test' value='555-1212,(123) 555-1212'/>
<script>
$('#phone-test').tokenField({regex:/^(?:\([0-9]{3}\) ?)?[0-9]{3}\-[0-9]{4}$/});
</script>
{% endhighlight %}

### Result ###

<input type='text' id='phone-test' value='555-1212,(123) 555-1212'/>

## Tokenized &lt;INPUT&gt; with word regex ##

### Source ###

{% highlight html %}
<input type='text' id='word-test' value='abc123,hello,foo-bar,no spaces,underscore_ok'/>
<script>
$('#word-test').tokenField({regex:/^[a-z][\w\-]+$/i});
</script>
{% endhighlight %}

### Result ###

<input type='text' id='word-test' value='abc123,hello,foo-bar,no spaces,underscore_ok'/>
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
