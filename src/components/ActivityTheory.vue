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
                <line x1="242.5" y1="49" x2="209.04" y2="99.43" />
                <line x1="257.5" y1="49" x2="291.96" y2="99.43" />
                <!-- Subject to Object, Community, and Rules -->
                <line x1="214" y1="109.6" x2="286" y2="109.6" />
                <line x1="204" y1="123.92" x2="243.23" y2="190.88" />
                <line x1="193.5" y1="123.92" x2="155" y2="191" />
                <!-- Object to Community and Division of Labour -->
                <line x1="294.23" y1="123.92" x2="256.77" y2="190.88" />
                <line x1="305" y1="123.92" x2="343.5" y2="191" />
                <!-- Community to Rules and Division of Labour -->
                <line x1="236" y1="202.2" x2="163" y2="202.2" />
                <line x1="264" y1="202.2" x2="337" y2="202.2" />

                <!-- Subject to  Division of Labour -->
                <line x1="211.20" y1="118.6" x2="337.8" y2="195.2" />
                <!-- Rules to Object -->
                <line x1="288.20" y1="117.6" x2="161.2" y2="195.2" />

                <!-- Additional Corrected Lines -->
                <line x1="250" y1="51" x2="250" y2="189.2" /><!-- Instruments to Community -->

            </g>
            <g fill="none" stroke="purple" stroke-width="1" marker-end="url(#arrowhead)">
                <line x1="330" y1="110.6" x2="395" y2="110.6" />

            </g>


            <!-- Vertices -->
            <g fill="#f2df2f">
                <!-- Instruments -->
                <circle cx="250" cy="37" r="5" @mouseenter="showInstrumentsPopover = true" @mouseleave="showInstrumentsPopover = false"/>
                <text x="250" y="27" fill="black" font-size="6" text-anchor="middle">Instruments</text>
                <!-- Subject -->
                <circle cx="200" cy="110.6" r="5" @mouseenter="showSubjectPopover = true" @mouseleave="showSubjectPopover = false"/>
                <text x="180" y="112.6" fill="black" font-size="6" text-anchor="middle">Subject</text>
                <!-- Object -->
                <circle cx="300" cy="110.6" r="5" @mouseenter="showObjectPopover = true" @mouseleave="showObjectPopover = false"/>
                <text x="317" y="112.6" fill="black" font-size="6" text-anchor="middle">Object</text>
                <!-- Outcome -->
                <circle cx="413" cy="110.6" r="5" @mouseenter="showOutcomePopover = true" @mouseleave="showOutcomePopover = false"/>
                <text x="435" y="112.6" fill="black" font-size="6" text-anchor="middle">Outcome</text>
                <!-- Rules -->
                <circle cx="150" cy="203.2" r="5" @mouseenter="showRulesPopover = true" @mouseleave="showRulesPopover = false"/>
                <text x="150" y="218.2" fill="black" font-size="6" text-anchor="middle">Rules</text>
                <!-- Community -->
                <circle cx="250" cy="203.2" r="5" @mouseenter="showCommunityPopover = true" @mouseleave="showCommunityPopover = false"/>
                <text x="250" y="218.2" fill="black" font-size="6" text-anchor="middle">Community</text>
                <!-- Division of Labour -->
                <circle cx="350" cy="203.2" r="5" @mouseenter="showDivisionPopover = true" @mouseleave="showDivisionPopover = false"/>
                <text x="350" y="218.2" fill="black" font-size="6" text-anchor="middle">Division of Labour</text>
            </g>
        </svg>

    <!-- Instruments Popover -->
    <Tooltip :visible="showInstrumentsPopover" :x="800" :y="20" :textdata="tooltips.instruments[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showSubjectPopover" :x="225" :y="150" :textdata="tooltips.subjects[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showObjectPopover" :x="860" :y="200" :textdata="tooltips.objects[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showOutcomePopover" :x="950" :y="120" :textdata="tooltips.outcomes[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showRulesPopover" :x="62" :y="520" :textdata="tooltips.rules[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showCommunityPopover" :x="530" :y="210" :textdata="tooltips.community[0]" :image="tooltips.outcomes[0].img"/>
    <Tooltip :visible="showDivisionPopover" :x="900" :y="290" :textdata="tooltips.division_of_labor[0]" :image="tooltips.outcomes[0].img"/>




    </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';
import tooltipsData from '@/json/tootips.json';


export default {
components: {
    Tooltip
  },
    data() {
    return {
        tooltips: tooltipsData,
        showInstrumentsPopover: false,
        showSubjectPopover: false,
        showObjectPopover: false,
        showOutcomePopover: false,
        showRulesPopover: false,
        showCommunityPopover: false,
        showDivisionPopover: false,

    };
  },
};</script>

<style scoped>
.activity-theory svg {
    max-width: 100%;
    height: auto;
}

text {
    color: #333;
}
</style>
