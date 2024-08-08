<form accept-charset="UTF-8" action="https://formkeep.com/f/6e347dc423ac" method="POST">

    <input type="hidden" name="utf8" value="✓">
    <div>
        <label>
            <span>Name:</span>
            <input name="Name" placeholder="Enter your name" type="text" tabindex="1" required><span class="required">*</span>
        </label>
    </div>
    <div>
        <label>
            <span>Email:</span>
            <input name="Email" placeholder="Enter your email address" type="email" tabindex="2" required><span class="required">*</span>
        </label>
    </div>
    <div>
        <label class="inline">
            <span>Add to mailing list:</span>
            <input name="Mailinglist" placeholder="Add to mailing list?" type="checkbox" value="mailinglist" tabindex="3">
        </label>
    </div>
    <div>
        <label>
            <span>Telephone:</span>
            <input name="Telephone" placeholder="Enter your number" type="tel" tabindex="4" required><span class="required">*</span>
        </label>
    </div>
    <div>
        <label>
            <span>Address:</span>
            <input name="Address1" placeholder="Enter your address" type="text" tabindex="5">
        </label>
    </div>
    <div>
        <label>
            <span></span>
            <input name="Address2" type="text" tabindex="6">
        </label>
    </div>
    <div>
        <label>
            <span>Town/City:</span>
            <input name="Town" placeholder="Enter your town or city" type="text" tabindex="7">
        </label>
    </div>
    <div>
        <label>
            <span>Post code:</span>
            <input name="Postcode" placeholder="Enter your post code" type="text" tabindex="8" required><span class="required">*</span>
        </label>
    </div>
    <div>
        <label>
            <span>Country:</span>
            <input name="Country" value="United Kingdom" placeholder="United Kingdom" type="text" tabindex="9" required><span class="required">*</span>
        </label>
    </div>
    <div>
        <label class="text_area">
            <span>Details:</span>
            <textarea name="Other" placeholder="If you have any specific requests, please add them here" tabindex="10" wrap="soft" spellcheck></textarea>
        </label>
    </div>
    <div id="chair_details">
        <label>
            <span>Quantity:</span>
            <input name="Quantity" type="number" min="1" max="9" placeholder="1" tabindex="11" value="1">
        </label>
        <label for="chair_type" id="chair_type_label">
            <span>Chair type:</span>
            <select name="chair_type" id="chair_type" selected="n/a">
                <option value="n/a">-</option>
                {% assign index_page_list = site.pages | where: 'title', 'Windsor Rocker' | First %}
{% for each_option in index_page_list[0].options %}<option value="{{ each_option.name}}">{{ each_option.name | capitalize }}</option>{% endfor %}
            </select>
        </label>
    </div>
    
    <div id="policy_approval">
        <label>
            <input name="policy-appoval" type="checkbox" value="policy-approval" tabindex="12" required>I have read and agree to your <a href="/data_policy" target="_new">data policy</a>.<span class="required">*</span>
        </label>
    </div>

    <input type="hidden" name="url" value="{{ site.url }}{{ page.url }}">
    <div id="form_buttons">
        <button class="button" name="submit" type="submit" id="contact-submit">Send</button>
    </div>

</form>

<span class="required">*</span> Required fields.
