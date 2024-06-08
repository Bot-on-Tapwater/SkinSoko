<h1>Skin Soko</h1>
## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```




## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.




                            <div class="t-content">
                                
                                <h1>The web's one-stop shop <br> for everything tech </h1>
                                <p>For over 2 years, we have been making it easy <br> for you to get amazing products.  </p>
                                
                                <div class="hero-btn">
                                    <NuxtLink to="/products/all/1" class="browse-categories">
                                        <button class="browse-products-btn">browse products</button>
                                    </NuxtLink>
                                    
                                    <!-- show sign in button for users not logged in -->
                                    <template v-if="!appStore.isAuth">
                                        <NuxtLink to="/account/login" class="sign-in">
                                            <button class="sign-in-btn">Sign in to buy</button>
                                        </NuxtLink>
                                    </template>


                                    <div class="btn-hover"></div>
                                </div>
                            </div>