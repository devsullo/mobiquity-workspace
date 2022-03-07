# Mobiquity Workspace

For better code scaling, development, and testing speed the project was generated using [Nx](https://nx.dev). Which is originally built on top of the Angular framework.

## Main Architecture

The application is divided into 4 internal projects f1-champions, f1-champions-e2e, core, and ergast. f1-champions is the main project which has core and egast lib dependencies. f1-champions-e2e is used for end-to-end testing

Container + Presentational design pattern are used with `ChangeDetectionStrategy.OnPush` and async pipe. This library and component divisions makes the project more reusable and fast testable.

## Testing

For unit, [Jest](https://jestjs.io) framework and for e2e, [Cypress](https://www.cypress.io) are used.

## Styleing

For UI components primeng, primeicons, primeflex are used.

# Instructions

Clone and run `npm i`. Make sure you are using node v16 or upper version

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/.

## Running tests

Run `nx run-many --target=test --all` to execute all tests

## Running end-to-end tests

Run `ng e2e --watch` to execute and watch the end-to-end tests

## Understand workspace

Run `nx graph` to see a diagram of the dependencies of this projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
