<script setup>
import { ref } from 'vue';
import SlidePanel from '@/components/shared/SlidePanel.vue';
import Cart from '@/components/modules/Cart.vue';
import { generateRandomProduct } from '@/utils/generator';

const cartVisibile = ref(false);
const products = ref([]);

const changeCartVisibilityClicked = () => {
    cartVisibile.value = !cartVisibile.value;
};

const addProductToCartClicked = () => {
    const product = generateRandomProduct();

    products.value.push(product);
    //changeCartVisibilityClicked();
};

const removeProductFromCartClicked = (index) => {
    products.value.splice(index, 1);
};

const incrementQuantityClicked = (index) => {
    products.value[index].quantity++;
};

const decrementQuantityClicked = (index) => {
    if (products.value[index].quantity === 1){
    removeProductFromCartClicked(index);
    return;
    }
    products.value[index].quantity--;
};

const clearCartClicked = () => {
    products.value = [];
};

</script>

<template>
    <div class="home">
        <h1>Carrinho de Compras</h1>
        <button class="btn success"
            @click="addProductToCartClicked()"
        >
            Adicionar ao Carrinho
        </button>
        <button 
            class="btn error ml-1"
            @click="clearCartClicked()"
        >
            Limpar o Carrinho
        </button>
        <button 
            class="btn error ml-1" 
            @click="changeCartVisibilityClicked()"
            >
            Abrir o Carrinho
        </button>

        <SlidePanel
            :title=" 'Carrinho de Compras' "
            :visible="cartVisibile"
            @update:visible="changeCartVisibilityClicked()"
            >
                <template #content>
                    <Cart :products="products"
                    @remove:product="removeProductFromCartClicked"
                    @increment:quantity="incrementQuantityClicked"
                    @decrement:quantity="decrementQuantityClicked"

                    />
                </template>

        </SlidePanel>
    </div>
</template>



<style lang="scss" scoped>

.btn {
  &.primary {
    background-color: #98fff6;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  &.success {
    background-color: #77ff77;
    color: #000;

    &:hover {
      background-color: #8ef98e;
      color: #000;
    }
  }

  &.error {
    background-color: #ff7777;
    color: #fff;

    &:hover {
      background-color: #fa9b9b;
      color: #000;
    }
  }

  &--ouline {
    background-color: transparent;
    color: #ff7777;

    &:hover {
      background-color: #ff7777;
      border: 1px solid #ff7777;
      color: #fff;
    }
  }
}

.ml-1 {
    margin-left: 1rem;
}
</style>