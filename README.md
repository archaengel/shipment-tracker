# NEO Tracker Coding Challenge

# Starting on local machine

In the root project folder, run `yarn install`.

If you do not already have `serve` installed globally, do so by running

```bash
  yarn global add serve
```

Then start the json server by running `yarn server`. In another terminal window, build the app and deploy it on your local machine by running `yarn deploy`

# Use cases

- The user should be able to:
  - See shipments in pages of 20 elements per page
    - In `src/sections/Shipments/index.tsx` I used a constant `PAGE_SIZE` set to `20`. I used the `useState` hook to keep track of the current page number and the subarray of shipments to show. In a production setting, I would have moved this logic server side, were it not already provided. `json-server` also implements pagination.
  - Search by shipment id
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - Be able to filter shipments by different criteria, like destination, cargo, etc. (open-ended)
    - In `src/sections/Shipments/index.tsx` I used functions defined in `src/lib/util` to filter, order, and search the shipments by id. In a production setting, I would likely move this logic to the server, and use `react-query` to cache results of identical calls to the API. While `json-server` does implement some of this functionality, it appeared more reasonable to move this logic to the client code to fulfill the testing requirement.
  - View the shipment information on a separate shipment details page
    - Each shipment card is wrapped in a `Link` component linking to the `shipment/:id` route, with the shipment's id passed in as a parameter.
  - Update the shipment name (should persist when the page is reloaded)
    - I used the `useMutation` hook from `react-query` here to send a patch request with new information to the API.

The interactions should not refresh the page.
