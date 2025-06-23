# 🔐 Password Strength Checker

This utility helps users create secure passwords by providing instant feedback on the strength of the entered password. It uses simple rules to classify the password as **Weak**, **Medium**, or **Strong** and provides visual indicators using a color-coded bar.

## 🚀 Features

- Live password strength evaluation
- Visual feedback with color bar
- Checks for:
  - Length (minimum 8 characters)
  - Capital letters
  - Numbers
  - Special characters
- Responsive UI using Next.js and CSS Modules

## 🛠️ Tech Stack

- Next.js (App Router)
- React (useState)
- CSS Modules for scoped styling

## 💡 Strength Criteria

| Strength       | Conditions                                                             |
|----------------|------------------------------------------------------------------------|
| Weak           | Less than 8 characters                                                 |
| Medium         | At least 8 characters, mix of letters and digits                       |
| Strong         | Includes uppercase, numbers, and special characters                    |
