---
layout: post
title:  'A 3D printed astrophotography mount'
description: "Earlier this year, I 3D printed an adapter to attach my iPhone to my telescope for more stable imaging."
date:   2015-03-15
categories: astrophotography
---

Thanks to a very helpful Project Lead the Way engineering teacher, I was able to 3D print a mount to attach my iPhone to an eyepiece and take stable images through my telescope (disregard the tape on my phone, that's an entirely different conversation...).

<a href="{{ site.baseurl }}/images/printed-ap-mount/front.jpg"><img style="float: left; width: 45%;" alt="The velcro" src="{{ site.baseurl }}/images/printed-ap-mount/front-small.jpg" /></a>
<a href="{{ site.baseurl }}/images/printed-ap-mount/back.jpg"><img style="float: right; width: 45%;" alt="Closeup of the case attached" src="{{ site.baseurl }}/images/printed-ap-mount/back-small.jpg" /></a>

<p class="center limited-image"><a class="no-decor" href="{{ site.baseurl }}/images/printed-ap-mount/scope.jpg"><img style="padding-top: 5%;" alt="My iPhone Astrophotography Rig" src="{{ site.baseurl }}/images/printed-ap-mount/scope-small.jpg" /></a></p>

Before this mount, I took images by just holding my iPhone up to the eyepiece. Although I did <a href="{% post_url 2014-10-31-2014-halloween-moon %}">get a good result once</a>, it required a lot of patience to line up the camera with the aperture of the eyepiece exactly.

I used Inventor, part an awesome design software suite by AutoDesk, to create the 3D model. On my 2nd attempt, I ended up with this prototype. It required some filing to get the iPhone to fit better, but I designed it that way - it's much easier to remove extra material than it is to add.

&nbsp;

Check out some of the images I've taken with this mount:

{% for post in site.tags['iphone-printed'] %}
* <a href="{{ post.url }}">{{ post.title }}</a>

{% endfor %}