import React from 'react';

export const CodeGuidelines = () => {
    return (
        <div>
            <h1>Code Guidelines</h1>
            
            <h2 id="markup-and-accessibility">Markup and Accessibility</h2>
            <p>Use progressive enhancement to ensure that all features are usable with only HTML enabled on every device and browser. Implement any interactive element with HTML5 and server-side processing and consider everything except HTML an optional extra.</p>
            <p>Check your markup against the <a href="https://validator.w3.org/" rel="noopener noreferrer" target="_blank">W3C standards</a> to ensure that the markup is well formatted and consider <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">WAI-ARIA</a> integration to increase the accessibility, in particular dynamic content, and user interface components developed with Ajax, JavaScript, and related technologies. Use makeup which represents the semantics of the content in the document being created, ARIA roles are the preferred method of designating the role of sections when its use may be ambiguous.</p>
            <p>As a minimum, your product must meet Level AA of the <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines</a> (WCAG) 2.0. To evaluate the accessibility performance of your product we recommend using a <a href="http://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE Web Accessibility Evaluation Tool</a>.</p>

            <h2 id="html-css-js">HTML, CSS and JavaScript, Font and Graphics</h2>
            <p>Add HTML, CSS and JavaScript through external files, minimising the number of files and ensuring they stay separate.</p>
            <p>Use font-face for font replacement and generate fonts for each of the browser supported in accordance with the font licensing agreement. Do not use the CSS font-weight attribute and instead use the weight provided by the font family.</p>
            <p>Use XML-based SVG for icons to ensure that graphics scale to any size without losing clarity and that they can be altered by code through CSS and JavaScript.</p>

            <h2 id="browser-support">Browser Support</h2>
            <p>Users must be able to access all the information and be able to complete their tasks regardless of the browser they use. Test for compatibility in the latest 2 major versions of Chrome, Firefox, Edge and Safari. Test the product on Windows, macOS, iOS and Android. We recommend <a href="https://www.browserstack.com/" target="_blank" rel="noopener noreferrer">BrowserStack</a>.</p>

            <h2 id="hierarchy-focus-states">Hierarchy, Focus and States</h2>
            <p>Enable keyboard navigation of all controls in a format suitable for use by screen readers and ensure that users know where they are in the product by giving them a visual and spoken feedback.</p>
            <p>Input focus should follow the order of the visual layout, from the top to the bottom and from left to right of the screen. It should traverse from the most important to the least important item.</p>
            <p>For icons that toggle between values and states, change the icon according to how it is presented to the user to ensure that screen readers verbalise the current state correctly.</p>

            <h2 id="touch">Touch</h2>
            <p>Ensure that the active area of touch targets are at least 48x48dp and where possible use larger touch targets to accommodate a larger spectrum of users. Separate touch targets by at least 8dp of space to ensure balanced information density and usability.</p>
            <p>For more information on touch interactions check <a href="https://www.ibm.com/design/language/experience/interaction/touch" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <h2 id="performance-and-optimisation">Performance and Optimisation</h2>
            <p>Concatenate and minify HTML, CSS and JavaScript on production as well as optimising size and the number of images to minimise latency and the impact on the product. To check the performance of your website we recommend <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse</a>.</p>
        </div>
      );
}

