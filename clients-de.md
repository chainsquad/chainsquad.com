---
layout: default
ref: clients
lang: de
permalink: /de/kunden
priority: 20
---

# Kunden

<div class="row">

{% for client in site.clients %}
 <div class="col-sm-4 col-md-4">
   <div class="thumbnail">
    <a href="{{client.URL}}" target="_blank">
     <img src="{{client.img}}" style="max-height:64px" />
    </a>
    <div class="caption text-center">
     <p>{{client.name}}</p>
    </div>
   </div>
 </div>
{% endfor %}

</div>

# Blockchains

<div class="row">

{% for client in site.chains %}
 <div class="col-sm-4 col-md-4">
   <div class="thumbnail">
    <a href="{{client.URL}}" target="_blank">
     <img src="{{client.img}}" style="max-height:64px" />
    </a>
    <div class="caption text-center">
     <p>{{client.name}}</p>
    </div>
   </div>
 </div>
{% endfor %}

</div>
