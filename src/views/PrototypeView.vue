<template>
    <div class="ui-container">
        <div class="button" @click="onShoppingListClick">Shopping List</div>
        <div class="button" @click="onShopAssistanceClick">Shop Assistance</div>
        <div class="button" @click="onMapClick">Map</div>
        <div class="button" @click="onPickClick">Pick Up Demo</div>
        <div class="button" @click="onCheckoutClick">Checkout</div>
        <div class="button" @click="onResetClick">Reset</div>
        <ProductInfo :visible="isProductInfoVisible" @selected="handleProductSelected"
            @close="isProductInfoVisible = false" />

    </div>
    <ShoppingList ref="shoppingList" :selectedItems="selectedShoppingItems" /> <!-- 添加这行 -->
    <ShopAssistantDialogue ref="shopAssistantDialogue" />
    <MapComponent ref="mapComponent" />
    <CheckoutDialog ref="checkoutDialog" />


    <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // 引入OrbitControls
import ShoppingList from '../components/ShoppingList.vue';
import ShopAssistantDialogue from '../components/ShopAssistantDialogue.vue';
import MapComponent from '../components/MapComponent.vue';
import ProductInfo from '../components/ProductInfo.vue';
import CheckoutDialog from '../components/CheckoutDialog.vue';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement); // 创建OrbitControls实例


export default {
    name: 'SupermarketScene',
    components: {
        ShoppingList,
        ShopAssistantDialogue,
        MapComponent,
        ProductInfo,
        CheckoutDialog
    },
    data() {
        return {
            isProductInfoVisible: false,
            selectedShoppingItems: [],
            // 其他数据...
        };
    },
    mounted() {
        this.initScene();
    },
    methods: {

        onShoppingListClick() {
            this.$refs.shoppingList.show();

        },
        onShopAssistanceClick() {

            // 直接设置相机的位置
            camera.position.set(-2, 1, 7);
            setTimeout(() => {
                if (this.$refs.shopAssistantDialogue) {
                    this.$refs.shopAssistantDialogue.show();
                }
            }, 700); // 延时1000毫秒，即1秒
        },
        onMapClick() {
            camera.position.set(0, 180, 0);
            setTimeout(() => {
                if (this.$refs.mapComponent) {
                    this.$refs.mapComponent.show();
                }
            }, 700); // 延时1000毫秒，即1秒

        },
        onCheckoutClick() {
            camera.position.set(-44, 2, -30);

            // 定义相机需要朝向的新目标点
            const newTarget = new THREE.Vector3(0, 0, -100);

            // 使用lookAt方法使相机朝向新的目标点
            camera.lookAt(newTarget);

            // 重要: 更新OrbitControls的目标点
            controls.target.set(newTarget.x, newTarget.y, newTarget.z);

            // 调用controls.update()来应用上述改变
            controls.update();
            setTimeout(() => {
                if (this.$refs.checkoutDialog) {
                    this.$refs.checkoutDialog.showDialog();
                }
            }, 700); // 延时1000毫秒，即1秒
        },
        onResetClick() {
            camera.position.set(0, 0, 10);
            // 处理点击事件
            const newTarget = new THREE.Vector3(0, 0, 0);

            // 使用lookAt方法使相机朝向新的目标点
            camera.lookAt(newTarget);

            // 重要: 更新OrbitControls的目标点
            controls.target.set(newTarget.x, newTarget.y, newTarget.z);

            // 调用controls.update()来应用上述改变
            controls.update();
        },
        onPickClick() {
            camera.position.set(55, 0, 30);
            // 设置延时器
            setTimeout(() => {
                this.isProductInfoVisible = true;
            }, 700); // 延迟700毫秒

        },
        handleProductSelected(product) {
            console.log('Selected product:', product.name);
            this.selectedShoppingItems.push(product.name);

            // 在这里处理选择的商品，比如添加到购物车
            this.isProductInfoVisible = false;
        },
        initScene() {

            renderer.setSize(window.innerWidth, window.innerHeight);
            this.$refs.canvasContainer.appendChild(renderer.domElement);
            const shoppingCartModel = '/3dmarket/scene.gltf';
            const loader = new GLTFLoader();
            const shoppingAssistant = '/3dwomen/scene.gltf';
            loader.load(shoppingAssistant, function (gltf) {
                // 假设模型是scene的第一个子级
                const originalModel = gltf.scene.children[0];

                scene.add(gltf.scene); // 将原始加载的场景添加到主场景中
                gltf.scene.position.set(1, -3, 2); // 设置原始模型位置
                gltf.scene.scale.set(3.3, 3.3, 3.3); // 设置原始模型比例

                // 克隆特定的模型，而不是整个场景
                const clonedModel = originalModel.clone();

                // 放置副本到新的位置
                clonedModel.position.set(-44, -3, -36); // 调整副本位置
                clonedModel.scale.set(3.3, 3.3, 3.3); // 调整副本位置

                // 由于clone()是浅复制，克隆的模型不会自动添加到场景，需要手动添加
                scene.add(clonedModel); // 将副本模型添加到主场景中


            });

            loader.load(shoppingCartModel, function (gltf) {
                scene.add(gltf.scene);
                gltf.scene.position.set(-25, -3, -70);
                gltf.scene.scale.set(1, 1, 1);
            });


            // 添加环境光
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // 添加定向光
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(0, 1, 1);
            scene.add(directionalLight);

            camera.position.set(0, 0, 10); // 调整相机初始位置

            controls.update(); // 控制器更新

            const animate = function () {
                requestAnimationFrame(animate);
                controls.update(); // 只有在需要时才更新控制器
                renderer.render(scene, camera);
            };

            animate();
        },
    },
};

</script>

<style>
.canvas-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.ui-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
    /* 确保UI在canvas之上 */
}

.button {
    background-color: #f0f0f0;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
}

.button:hover {
    background-color: #ddd;
}
</style>