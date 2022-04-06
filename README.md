
# events app
this is a `nextJS` app to explore some events and their informations with filter.

## whats the purpose of this project?
im learning `nextJS` and i learned file based routing. to exercise what i learned from file based routing and `useRouter` hook, i created this simple project. it is not very well project and my purpose was exrcising file based routing.

## what i learned in this project
i learned that in `nextJS` apps, `useRouter` hook doesnt give us an object in the first rendering. it gives us the url object in second rendering and it causes some problems. to display loading spinner for this, we should use `isReady` property of url object. i learned using `replace` method of the returned object from `useRouter`.

## frameworks and libraries
* react
* nextJS
* tailwind css 