# ld-books

This is a simple single page web app developed using nextjs.

To enable featue flagging add the Client-side ID:

- Clone this repository and `cd` into the project directory
- Create a file `.env.local` in the root of the project
- Add the following key value pair:

```
NEXT_PUBLIC_LD_CLIENT_SIDE_ID=<Client-side ID>
```

- Run the following command:

```
npm run dev
```

You should see a page similar to this:

<img width="1314" alt="Screen Shot 2022-07-01 at 14 20 47" src="https://user-images.githubusercontent.com/1982588/176893295-7639dcde-a700-4edf-946b-24e19f1fe213.png">

There are four feature flags configured:

<img width="1372" alt="Screen Shot 2022-07-01 at 14 24 52" src="https://user-images.githubusercontent.com/1982588/176893940-fde0798a-ba8d-446e-a40e-f525c877a6a3.png">

- The initial configuration and the `pageHeader` flag were developed in https://github.com/bas/ld-books/pull/1/files. It uses two string variations to show different header texts for the staff picks page.
- The `applyCoupon` and `showCampaignBanner` flags were developed in https://github.com/bas/ld-books/pull/2/files. It adds a text input field to the cart to allow the user to apply a coupon and if that flag returns true and `showCampaignBanner` returns true it also shows a campaign banner to promote a coupon code. 
- The `cartButton` flag was developed in https://github.com/bas/ld-books/pull/3/files. It uses four string variations for different buttons to test if different types of buttons return a higher conversion rate.

Here is a screenshot with the feature flags enabled:

<img width="1306" alt="Screen Shot 2022-07-01 at 14 37 20" src="https://user-images.githubusercontent.com/1982588/176895918-43ac5b80-af8f-40b9-b7ce-a7caa6486a95.png">

It shows a [different header text](https://github.com/bas/ld-books/pull/1/files#diff-7c97c1ad17c63f34774324965f81661cea32f533a65c39ab03576069972e4d0eR66), the [text input](https://github.com/bas/ld-books/pull/2/files#diff-5e5602b99ccd8618a8fd660de36670dea6de9028a679e5169069c10e0e94c8dcR38) in the cart, [the banner](https://github.com/bas/ld-books/pull/2/files#diff-7c97c1ad17c63f34774324965f81661cea32f533a65c39ab03576069972e4d0eR70) and the [text and icon variation](https://github.com/bas/ld-books/pull/3/files) of the Add to art button.


