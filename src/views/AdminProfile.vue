<template>
    <div class="adminprofile__container">
        <h2>ادمین عزیز، خوش آمدید</h2>
        <Tab name="product-list" selected="true">
            
        </Tab>
    </div>
</template>

<script>
import { Tab } from '../components/Tab.vue'

export default {
    name: "AdminProfile",
    components: {
        Tab,
    }
}
</script>
