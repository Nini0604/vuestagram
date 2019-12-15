 <template>
  <div @click="boxClick(filter)" :class="['filter-item',filter]" :style="'background-image:url('+image+')'">
    <!-- {{filter}} -->
    <slot></slot>
  </div>
</template>

<script>
import EventBus from './../EventBus.js';

export default {
  name: 'FilterBox',
  data() {
    return {
    }
  },
  props: {
    filter: String,
    image: String
  },
  methods: {
    boxClick(filter){
      EventBus.$emit('select-filter', filter);
    }
  }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto; padding: 8px;
    display: inline-block;
    color : white; 
    background-size: cover; 
    background-position : center; 
}
</style>