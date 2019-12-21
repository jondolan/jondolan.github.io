---
layout: default
title: thoughts
short: a collection of thoughts on scientific, engineering, and other creative topics
description: A collection of thoughts on scientific, engineering, and other creative topics
date: 2019-12-21
modified: 2019-12-21
---

{% for post in site.posts %}
<p>
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3> - <span class="font:small">{{ page.date | date: "%b %d, %Y" }}</span>
  <div>&nbsp;&nbsp;&raquo; {{ post.short }}</div>
  {% if forloop.last == false %}
    <hr class="vertical-margin:med">
  {% endif %}
</p>
{% endfor %}