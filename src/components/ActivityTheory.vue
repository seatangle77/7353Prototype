<template>
    <div class="activity-theory">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <!-- Arrowheads definition -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="purple" />
                </marker>
                <marker id="arrowend" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M9,0 L9,6 L0,3 z" fill="purple" />
                </marker>
            </defs>

            <!-- Connecting lines with double-sided arrowheads -->
            <g fill="none" stroke="purple" stroke-width="1" marker-end="url(#arrowhead)" marker-start="url(#arrowend)">
                <!-- Instruments to Subject and Object -->
                <line x1="242.5" y1="99" x2="209.04" y2="149.43" />
                <line x1="257.5" y1="99" x2="291.96" y2="149.43" />
                <!-- Subject to Object, Community, and Rules -->
                <line x1="214" y1="159.6" x2="286" y2="159.6" />
                <line x1="204" y1="173.92" x2="243.23" y2="240.88" />
                <line x1="193.5" y1="173.92" x2="155" y2="241" />
                <!-- Object to Community and Division of Labour -->
                <line x1="294.23" y1="173.92" x2="256.77" y2="240.88" />
                <line x1="305" y1="173.92" x2="343.5" y2="241" />
                <!-- Community to Rules and Division of Labour -->
                <line x1="236" y1="252.2" x2="163" y2="252.2" />
                <line x1="264" y1="252.2" x2="337" y2="252.2" />

                <!-- Subject to  Division of Labour -->
                <line x1="211.20" y1="168.6" x2="337.8" y2="245.2" />
                <!-- Rules to Object -->
                <line x1="288.20" y1="167.6" x2="161.2" y2="245.2" />

                <!-- Additional Corrected Lines -->
                <line x1="250" y1="101" x2="250" y2="239.2" /><!-- Instruments to Community -->

            </g>

            <!-- Vertices -->
            <g fill="yellow">
                <!-- Instruments -->
                <circle cx="250" cy="87" r="5" />
                <text x="250" y="75" fill="black" font-size="6" text-anchor="middle">Instruments</text>
                <!-- Subject -->
                <circle cx="200" cy="160.6" r="5" />
                <text x="200" y="161.6" fill="black" font-size="6" text-anchor="middle">Subject</text>
                <!-- Object -->
                <circle cx="300" cy="160.6" r="5" />
                <text x="300" y="161.6" fill="black" font-size="6" text-anchor="middle">Object</text>
                <!-- Outcome -->
                <circle cx="420" cy="160.6" r="5" />
                <text x="420" y="161.6" fill="black" font-size="6" text-anchor="middle">Outcome</text>
                <!-- Rules -->
                <circle cx="150" cy="253.2" r="5" />
                <text x="150" y="248.2" fill="black" font-size="6" text-anchor="middle">Rules</text>
                <!-- Community -->
                <circle cx="250" cy="253.2" r="5" />
                <text x="250" y="248.2" fill="black" font-size="6" text-anchor="middle">Community</text>
                <!-- Division of Labour -->
                <circle cx="350" cy="253.2" r="5" />
                <text x="350" y="248.2" fill="black" font-size="6" text-anchor="middle">Division of Labour</text>
            </g>
        </svg>
    </div>
</template>

<script setup>
// Vue 3 setup script block is empty for this example
</script>

<style scoped>
.activity-theory svg {
    max-width: 100%;
    height: auto;
}
</style>
