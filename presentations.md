---
layout: default
ref: presentations
lang: en
permalink: /presentations
priority: 5
---

# Presentations

{% assign presentations = site.presentations | sort: "date" | reverse %}
{% for post in presentations %}
<div>
 <div class="overview-link">
  <strong>{{ post.title }}</strong>
  <div class="time">📅 {{post.date | date: "%-d %B %Y"}} | 🗺 {{post.location}}</div>
 </div>
 <span class="excerpt">{{ post.excerpt }}</span>
</div>
{% endfor %}
