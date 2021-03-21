### Notes / Room for improvements

- To start the project, download and run `npm install && npm run dev`
- Used the file system with API route to simulate a DB, please see mock data in urls.json
- Used dynamic route and `getServerSideProps` to redirect users from short url to full url
- I used nanoid to handle short unique id generation, they have an [interesting page](https://zelark.github.io/nano-id-cc/) to help calculatechance of collision.
- I used 8 characters setting, according to their page, "~99 days needed, in order to have a 1% probability of at least one collision".

# Challenge #3

Given any URL, shorten it and return a globally unique URL back to the user. Make sure to call out any assumptions and / or limitations in your solution.
