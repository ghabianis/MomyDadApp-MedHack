<template>
    <div class="container">
        <div class="parent">
            <img src="../../public/png/baby/baby.png" class="img">
        </div>
        <div>
            <h4 class="welcome">
                Welcome to BabyBloom!
            </h4>
            <h6 class="text-after-welcome">Your trusted companion on the beautiful journey of pregnancy</h6>
        </div>
        <button class="btn" @click="navigateToOtherRoute">Next <svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" viewBox="0 0 17 16" fill="none">
                <g clip-path="url(#clip0_2317_56)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.5 8C1.5 9.85652 2.2375 11.637 3.55025 12.9497C4.86301 14.2625 6.64348 15 8.5 15C10.3565 15 12.137 14.2625 13.4497 12.9497C14.7625 11.637 15.5 9.85652 15.5 8C15.5 6.14348 14.7625 4.36301 13.4497 3.05025C12.137 1.7375 10.3565 1 8.5 1C6.64348 1 4.86301 1.7375 3.55025 3.05025C2.2375 4.36301 1.5 6.14348 1.5 8ZM16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8ZM5 7.5C4.86739 7.5 4.74021 7.55268 4.64645 7.64645C4.55268 7.74021 4.5 7.86739 4.5 8C4.5 8.13261 4.55268 8.25979 4.64645 8.35355C4.74021 8.44732 4.86739 8.5 5 8.5H10.793L8.646 10.646C8.59951 10.6925 8.56264 10.7477 8.53748 10.8084C8.51232 10.8692 8.49937 10.9343 8.49937 11C8.49937 11.0657 8.51232 11.1308 8.53748 11.1916C8.56264 11.2523 8.59951 11.3075 8.646 11.354C8.69249 11.4005 8.74768 11.4374 8.80842 11.4625C8.86916 11.4877 8.93426 11.5006 9 11.5006C9.06574 11.5006 9.13084 11.4877 9.19158 11.4625C9.25232 11.4374 9.30751 11.4005 9.354 11.354L12.354 8.354C12.4006 8.30755 12.4375 8.25238 12.4627 8.19163C12.4879 8.13089 12.5009 8.06577 12.5009 8C12.5009 7.93423 12.4879 7.86911 12.4627 7.80837C12.4375 7.74762 12.4006 7.69245 12.354 7.646L9.354 4.646C9.30751 4.59951 9.25232 4.56264 9.19158 4.53748C9.13084 4.51232 9.06574 4.49937 9 4.49937C8.93426 4.49937 8.86916 4.51232 8.80842 4.53748C8.74768 4.56264 8.69249 4.59951 8.646 4.646C8.59951 4.69249 8.56264 4.74768 8.53748 4.80842C8.51232 4.86916 8.49937 4.93426 8.49937 5C8.49937 5.06574 8.51232 5.13084 8.53748 5.19158C8.56264 5.25232 8.59951 5.30751 8.646 5.354L10.793 7.5H5Z"
                        fill="#F8F9FA" />
                </g>
                <defs>
                    <clipPath id="clip0_2317_56">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg></button>

    </div>
</template>

<script lang="ts">
export default {
    methods: {
        navigateToOtherRoute() {
            this.$router.push('/navigation'); // Replace '/other-route' with the path to your target route.
        },
    },
};
</script>

<style>
.container {
    width: 428px;
    height: 500px;
    border-radius: 24px;
    background: var(--Secondary, #130F26);
    margin-top: 2%;
    margin-bottom: 3%;
}

body {
    border-radius: 24px;
    height: 100px;
    background: var(--Secondary, #130F26);
}

.btn {
    display: flex;
    width: 208px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 4.8px;
    background: var(--Primary-500, #FF7261);
    margin-top: 60px;
    margin-left: 100px;
    margin-right: 120px;
    margin-bottom: 200px;
}

.parent {
    display: flex;
    width: 388px;
    height: 448px;
    padding: 99px 18px 99px 19px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 22px;
    background: var(--Primary-50, #FFF1EF);
    margin-top: 10px;
    margin-left: 5px;
}

.img {
    width: 351px;
    height: 250px;
    flex-shrink: 0;

}

.welcome {
    color: var(--theme-light, #F8F9FA);

    /* Heading/H4 */
    font-family: Poppins;
    font-size: 24px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-top: 120px;
    margin-left: 20px;
    /* 28.8px */
}

.text-after-welcome {
    width: 364px;
    color: var(--theme-light, #F8F9FA);
    text-align: center;
    /* Body/Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 26px;
    margin-left: 20px;
    /* 24px */
}
</style>
