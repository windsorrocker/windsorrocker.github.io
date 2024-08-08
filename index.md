---
title: Windsor Rocker
layout: default
main_image: kwf/KWFWindsorRocker/WindsorRocker_Screen_LowerCourt.jpg
options:
  - name: ash
    image_path: kwf/KWFWindsorRocker/KWF%20Windsor%20Rocker%20quarter%20view.jpg&right=0.95313&left=0.025
    description: Ash
    price: £3,600
  - name: black
    image_path: kwf/KWFWindsorRocker/Black%20Windsor%20rocker.jpg&bottom=0.94375&top=0.06563
    description: Black
    price: £3,600
  - name: oak
    image_path: kwf/KWFWindsorRocker/KWF%20Windsor%20Rocker%20quarter%20view.jpg&right=0.95313&left=0.025
    description: Oak
    price: £3,600
  - name: something_else
    image_path: kwf/KWFWindsorRocker/KWF-WindsorRocker-WalnutAsh-F12-White.jpg&bottom=0.84688&top=0.17813
    description: Something else
    price: £3,600
---
<section id="shop" markdown="1">

## <a href="#shop" title="Link to this heading">Shop</a>

<div class="image">
<img class="lazy-image" src="http://images.cart-shed.com/static/images/spacer.png"    data-defer-src="http://images.cart-shed.com/image?src={{ page.main_image }}&width=770">
</div>

<div id="words">

The Windsor rocker is a contemporary wooden rocking chair with its roots firmly planted in the traditions of Windsor chair making. It is both inspired by and extends the possibilities of these traditional chair making techniques. The band which forms the rocker and the chair’s frame stretches the limitations of the process of steam bending whilst giving the chair its unique form. The twenty four spindles flare out from the carved solid seat to the band such that their opposing angles produce an extremely rigid but light form. It is a truly contemporary chair but it echoes the original wheelwright’s craft from which the Windsor chair is derived. As collectible as it is comfortable, it is beautifully hand crafted in the UK from locally sourced sustainable wood and finished with a natural oil.

</div>

<div class="grid_container">

{% for item in page.options %}<div class="image grid_item">
<img class="lazy-image" src="http://images.cart-shed.com/static/images/spacer.png" data-defer-src="http://images.cart-shed.com/image?src={{ item.image_path }}&width=360">
<div class="name">{{ item.description | capitalize }}</div>
<div class="price">{{ item.price }}</div>
<a class="button order" onclick="selectOption('chair_type', '{{ item.name }}');window.location.href = '#contact';">Order now</a>
</div>{% endfor %}

</div>

All prices include UK mainland delivery and VAT at 20%. Please contact us for overseas shipping.

</section>

<section id="about" markdown="1">

## <a href="#about" title="Link to this heading">About</a>

### <a name="story"></a>The story

The Windsor Rocker was designed by Katie Walker in 2011. Her designs are not lead by fashion or current trends but rather by the ambition of achieving a pure, visually simple, balanced design whose form has been developed in conjunction with its structure. Its conception was one of those ‘light bulb’ moments when Katie, having researched the craft of Windsor chair making saw an existing design of hers, The Ribbon rocking chair in a new light - The challenge when designing the 'Ribbon' rocking chair was to create a form in which the backrest, armrests and runners were made from one continuous piece. This was realised by laminating 1.5mm strips of wood veneers. However, Katie realised that as with the wheelwrights craft this continuous band could also be formed by steam bending. And so the idea of the Windsor Rocker was born. The result of working closely with skilled craftsmen across the UK, often extending the boundaries of what are essentially traditional processes. It took many years to realise in its current beautifully crafted form.

Something about the beauty of working with traditional processes in an exciting contemporary way. Working with wood, our primary natural renewable resource and designing a piece to be handed down the generations.

For a furniture designer, designing a chair is the ultimate challenge and for Katie Walker a rocking chair is a very special piece. It is not a neccessity but an object both requiring and facilitating time and space = those precious quieter moments in life.

A winner of the Wood Awards in 2011 and awarded a <a href="https://www.designguildmark.org.uk/project/windsor-rocker-by-katie-walker" target="_new">Design Guildmark</a> by the Furniture Makers Company, the Windsor Rocker has achieved much attention. In 2017 it was chosen by Heals as one of its <a href="https://images.cart-shed.com/original?src=kwf/retailers/HEALs+100.png" target="_new">"Top 100 Design Icons"</a>. It has been used in the UK Government's "Design is GREAT" poster campaign to promote British industry, creativity and culture abroad.

### <a name="sustainability"></a>Sustainability

As an entirely timber product the Windsor rocker has always been made from sustainably sourced timber. From 2024 this will also be British with a Windsor Rockers provenance being directly traceable back to the estate from which the wood was grown. As corporate members of Woodland Heritage we are proud to support British Forestry  with the Knowledge that it will provide a well managed sustainable resource for the future and encourage you to support them too: Woodland Heritage 

We use natural finishes and as few processes in their manufacture as possible.

The Windsor Rockers are made in a purpose built, super-insulated timber workshop with the machinery powered by 100% renewably generated electricity. We generate minimal waste. Any off-cuts that are too small to be used or of unsuitable quality are burnt in a high efficiency domestic heater. Most softwood for jigs etc. is reused or reclaimed. Sawdust is composted. Resin and adhesive waste is kept minimal (<5%).  Packaging is minimised and biodegradable - paper tape and bubble wrap, plain card and brushed cotton. We aim to use local suppliers where possible to reduce delivery mileage.

</section>

<section id="gallery" markdown="1">

## <a href="#gallery" title="Link to this heading">Gallery</a>


If you have anything to share that has enhanced your rocking experience, we'd love to hear from you. Instagram? "@WindsorRocker".

<div class="grid_container" id="gallery">
    
{% assign contents = site.gallery %}
{% for item in contents %}{% if item.permission == true %}{% include cell.html %}{% endif %}{% endfor %}

</div>

</section>

<section id="contact" markdown="1">

## <a href="#contact" title="Link to this heading">Contact / Order</a>

{% include_relative contact.md %}
