---
layout: default
ref: clients
lang: de
permalink: /de/kunden
priority: 20
---

# Kunden und Partner

Ehemalige und aktuelle Projekte, Kunden und Partner:

<div class="row">

{% assign sorted = site.clients | sort: 'order' %}
{% for client in sorted %}
 <div class="col-sm-4 col-md-4">
   <div class="thumbnail">
    <a href="{{client.URL}}" target="_blank">
     <img src="{{client.img}}" />
    </a>
    <div class="caption text-center">
     <p>{{client.name}}</p>
    </div>
   </div>
 </div>
{% endfor %}

{% for client in site.chains %}
 <div class="col-sm-4 col-md-4">
   <div class="thumbnail">
    <a href="{{client.URL}}" target="_blank">
     <img src="{{client.img}}" />
    </a>
    <div class="caption text-center">
     <p>{{client.name}}</p>
    </div>
   </div>
 </div>
{% endfor %}

</div>
