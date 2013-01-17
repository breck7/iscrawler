// grabbed from https://github.com/kevinelliott/agent_orange
var crawlers = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|nagios|postrank|pingdom|slurp|spider|yahoo/i

/**
 * @param {string}. The user agent.
 * @return {bool}. Is this a crawler? true/false
 */
module.exports = function (userAgentString) {
 return userAgentString.match(crawlers) !== null
}
