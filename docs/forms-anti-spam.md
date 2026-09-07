# Forms anti-spam operations

Create a Cloudflare Turnstile widget for `asbmarketresearch.com` with both `asbmarketresearch.com` and `www.asbmarketresearch.com` in its hostname allowlist. Use the managed widget mode unless a different user-experience requirement is agreed. Copy its site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and its secret key to `TURNSTILE_SECRET_KEY` in the Vercel environment for Preview and Production. Do not commit either real value. Redeploy after adding them.

Recommended Cloudflare WAF rate-limiting rule (do not create it until approved):

- Expression: `http.request.method eq "POST" and http.request.uri.path eq "/api/forms"`
- Characteristic: IP address
- Period: 1 minute
- Requests: 10
- Mitigation timeout: 10 minutes
- Action: Managed Challenge

Managed Challenge is preferred for this low-volume form endpoint because it limits automation while reducing false positives for legitimate users sharing a NAT. Monitor the event log for one week; move to Block only if abusive traffic persists after the challenge.
