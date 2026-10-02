# Society Manager: setup (about 15 minutes, free)

## 1. Create the Firebase project
1. Go to console.firebase.google.com, click **Add project**, give it a name (turn off Analytics).
2. **Build > Authentication > Get started**, enable **Email/Password**.
3. **Build > Firestore Database > Create database**, choose **production mode** and a region near India (asia-south1 Mumbai).
4. Open the **Rules** tab, paste the contents of `firestore.rules`, click **Publish**.
5. **Project settings (gear) > Your apps > Web (`</>`)**, register an app, and copy the `firebaseConfig` values.
6. Open `index.html`, find `const cfg=` near the top of the script, and paste in your values.

## 2. Host it (free)
Upload this folder to **Firebase Hosting** (`firebase deploy`), Netlify, Vercel or GitHub Pages. It must be served over **https** for the app install and offline mode to work.
In Authentication > Settings > Authorized domains, add your hosting domain.

## 3. First admin
1. Open the app and **Create account** with your email.
2. In Firebase console > Firestore > `users` > your document, change `role` from `pending` to `admin`.
3. Log in again. Use **Flats > Add many flats** to create each wing, and **Users** to approve others.

## Roles
- **admin**: everything, including flats, users, deleting entries and the audit log.
- **committee**: add payments, donations and expenses, approve expenses.
- **coordinator**: add and see payments and donations only for their own wing (set Wing in Users).
- **resident**: sees only their own flat (set Flat, e.g. A-101, in Users).

## Install as an app
Android Chrome: menu > **Install app**. iPhone Safari: Share > **Add to Home Screen**.

## Notes
- Expense flow: Pending > Approved (by someone other than the person who added it, unless admin) > Paid.
- Bill photos: Firebase Storage needs a paid plan for new projects, so paste a Google Drive link instead.
- Excel exports download as .csv files that open directly in Excel.
- Audit log is stored in the `log` collection (viewable in the Firebase console).
- The free tier is far more than a 12-wing society needs.
