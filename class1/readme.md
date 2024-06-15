 
 ## GOOD TO KNOW STUFF
 ## A CDN is a network of servers used to deliver content efficiently by distributing it geographically. When importing React from a CDN, you benefit from faster load times, browser caching, and reduced server load. This is especially useful for improving the performance and user experience of your React applications.

**************************************************************************************************************************************************
 ## Understanding Cross-Origin
    To understand why crossorigin is used in your script tags, let's first break down what "cross-origin" means and why it's important in web development.


## What is Cross-Origin?
    When your web page loads resources (like scripts, images, or data) from a different domain, protocol, or port than the one your page is served from, this is considered a "cross-origin" request. For example, if your website is hosted at https://mywebsite.com and you load a script from https://unpkg.com, that's a cross-origin request because unpkg.com is a different domain.


## Why crossorigin Attribute is Used
    When you include scripts from another origin (like a CDN), the browser may need to handle certain security policies. The crossorigin attribute is used to handle how these cross-origin requests are made and what kind of credentials (such as cookies or HTTP authentication) are sent with the request.



## How crossorigin Works in Your Script Tags In your example:
<script 
    crossorigin src="https://unpkg.com/react@18/umd/react.development.js">
</script>
<script 
    crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>

    Purpose of crossorigin: The crossorigin attribute tells the browser to handle these script requests with cross-origin resource sharing (CORS) policies. CORS is a security feature that allows controlled access to resources located outside of a given domain.

## Why It's Important: When you load resources from a different origin, the browser must ensure that these resources can be trusted and won't cause security issues. The crossorigin attribute helps manage this process.



## Common Values for crossorigin
    There are two common values you might use with crossorigin:

    anonymous (default): This means that no credentials (cookies, HTTP authentication) will be sent with the request. The resource can still be accessed and used as long as the server allows it.
    <script crossorigin="anonymous" src="https://unpkg.com/react@18/umd/react.development.js"></script>

    use-credentials: This means that credentials (like cookies or HTTP authentication) are sent with the request. The server must explicitly allow these credentials to be sent by including the Access-Control-Allow-Credentials header in its response.
    <script crossorigin="use-credentials" src="https://unpkg.com/react@18/umd/react.development.js"></script>


## Why Use crossorigin with React and ReactDOM When loading React and ReactDOM from a CDN:

    Security: Using the crossorigin attribute helps ensure that the scripts are loaded securely and that the browser applies the appropriate CORS policies.

    Integrity Checks: If you also use the integrity attribute (for Subresource Integrity, or SRI), the crossorigin attribute is necessary. SRI allows the browser to verify that the fetched resource has not been altered. Here’s how you might include it:

## Summary
    Cross-Origin: When loading resources from a different domain, it's a cross-origin request.
    crossorigin Attribute: This attribute manages how these cross-origin requests are handled, ensuring security and proper credential handling.
    Usage in React: When importing React and ReactDOM from a CDN, the crossorigin attribute ensures these scripts are loaded securely, and is especially useful when combined with Subresource Integrity (SRI) checks.
    Using the crossorigin attribute helps keep your application secure and ensures that the resources loaded from different origins are handled properly by the browser.

***************************************************************************************************************************************************