<template>
    <section class="outer-section-wrp">
        <div class="profile-ord">

            <div class="pord-container">

                <div class="orders-wrp">
                    <template v-if="userReviews">
                    <div class="orderstables">
                        <table>
                            <tr>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Product Name</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>

                            <tr v-for="review in userReviews" :key="review.review_id">
                                <td>{{ review.rating }}</td>
                                <td class="trim-item-content">{{ review.comment }}</td>
                                <td class="trim-item-content product-name"><NuxtLink :to="'/products/'+review.product.product_id">{{ review.product.name }}</NuxtLink></td>
                                <td>{{ review.created_at }}</td>
                                <td @click="deleteUserReview(review.review_id)" class="delete-review">Delete Review</td>
                                
                            </tr>

                            </table>
                            
                        </div>
                    </template>

                    <template v-else>
                        <p class="item-absent">You have not reviewed any item.</p>
                        <p>Any product review you write will be shown here.</p>
                    </template>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

definePageMeta({
    layout:"memberprofile"
})


const userReviews = ref()
/**variable to hold reviews created by user */

userReviews.value = await getUserReviews()

/**func to get reviews created by user */
async function getUserReviews() {
    try {
        const {data} = await axiosInstance("/users/reviews/")
        return data.query_results
    } catch (error) {
        return null
    }
}
/**func called when user wants to delete a review */
async function deleteUserReview(reviewId: number) {
    try {
        await axiosInstance.delete(`/users/reviews/${reviewId}/delete/`)
        userReviews.value = await getUserReviews()

    } catch (error) {
        
    }
}

</script>

<style lang="scss" scoped>


</style>