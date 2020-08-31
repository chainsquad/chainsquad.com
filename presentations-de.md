---
layout: default
ref: presentations
lang: de
permalink: /de/praesentationen
priority: 5
---

# Presentations

{% assign presentations = site.presentations | where:"lang", en | sort: "date" | reverse %}
{% for post in presentations %}
<div>
 <div class="overview-link">
  <strong>{{ post.title }}</strong>
  <div class="time">📅 {{post.date | date: "%- %B %Y"}} | 🗺 {{post.location}}</div>
 </div>
 <span class="excerpt">{{ post.excerpt }}</span>
</div>
{% endfor %}
