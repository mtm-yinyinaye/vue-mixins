# vue-mixins


Vue mixins help you store logic that needs to be reused in components so that you don’t have to repeat logic—resulting in cleaner and more efficient code. 

There are two type of mixins:
1. Local mixins
2. Global mixins


## Local mixins 
```
import myMixin from './filename.js'

export default {
    mixins: [myMixin],
}
```


## Global mixins 
```
import myMixin from './filename.js'

Vue.mixin(myMixin);

(OR)

Vue.mixin({
    data: function() {
        return {

        }
    },
    metnods: {
        
    }
});
```


## First Step
```
clone https://github.com/yinyinaye96/vue-mixins.git
```

## Install NPM
```
npm install
```


## Run Project
```
npm run serve
```


