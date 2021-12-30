<template>
  <button @click="createDog()">
    Create New Dog
  </button>
  <button @click="logFirstDog()">
    Log First Dog
  </button>
  <p><span id="dog-contents">{{ dogContents }}</span></p>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import RealmHolder from '/@/RealmHolder';
import Dog from '/@/Dog';

const realm = await RealmHolder.getRealm();

export default defineComponent ({
  name: 'RealmView',
  data() {
    let dogContents = '';
    return {
      dogContents: dogContents,
    };
  },
  methods: {
    createDog: function() {
      realm.write(() => {
        realm.create(Dog, Dog.generate('Spot'));
      });
    },
    logFirstDog: function() {
      console.log(realm.objects(Dog)[0]);
      this.dogContents = JSON.stringify(realm.objects(Dog)[0]);
    },
  },

});
</script>

<style scoped>

</style>
