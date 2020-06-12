(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{375:function(a,s,t){"use strict";t.r(s);var e=t(43),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"join-as-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-as-a-validator"}},[a._v("#")]),a._v(" Join as a Validator")]),a._v(" "),t("h3",{attrs:{id:"_1-run-a-new-full-node-on-a-new-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-run-a-new-full-node-on-a-new-machine"}},[a._v("#")]),a._v(" 1. "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/run-full-node-mainnet.html"}},[a._v("Run a new full node")]),a._v(" on a new machine.")],1),a._v(" "),t("h3",{attrs:{id:"_2-generate-a-new-key-pair-for-yourself-change-key-alias-with-any-word-of-your-choice-this-is-just-for-your-internal-personal-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-generate-a-new-key-pair-for-yourself-change-key-alias-with-any-word-of-your-choice-this-is-just-for-your-internal-personal-reference"}},[a._v("#")]),a._v(" 2. Generate a new key pair for yourself (change "),t("code",[a._v("<key-alias>")]),a._v(" with any word of your choice, this is just for your internal/personal reference):")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("⚠️Note⚠️: Backup the mnemonics!")]),a._v(" "),t("strong",[a._v("⚠️Note⚠️: Please make sure you also "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/backup-a-validator.html"}},[a._v("backup your validator")])],1)]),a._v(" "),t("p",[t("strong",[a._v("Note")]),a._v(": If you already have a key you can import it with the bip39 mnemonic with "),t("code",[a._v("enigmacli keys add <key-alias> --recover")]),a._v(" or with "),t("code",[a._v("enigmacli keys export")]),a._v(" (exports to "),t("code",[a._v("stderr")]),a._v("!!) & "),t("code",[a._v("enigmacli keys import")]),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"_3-output-your-node-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-output-your-node-address"}},[a._v("#")]),a._v(" 3. Output your node address:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -a\n")])])]),t("h3",{attrs:{id:"_4-transfer-tokens-to-the-address-displayed-above"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-transfer-tokens-to-the-address-displayed-above"}},[a._v("#")]),a._v(" 4. Transfer tokens to the address displayed above.")]),a._v(" "),t("h3",{attrs:{id:"_5-check-that-you-have-the-requested-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-check-that-you-have-the-requested-tokens"}},[a._v("#")]),a._v(" 5. Check that you have the requested tokens:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli q account "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("p",[a._v("If you get the following message, it means that you have no tokens yet:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ERROR: unknown address: account enigmaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx does not exist\n")])])]),t("h3",{attrs:{id:"_6-join-the-network-as-a-new-validator-replace-moniker-with-your-own-from-step-3-above-and-adjust-the-amount-you-want-to-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-join-the-network-as-a-new-validator-replace-moniker-with-your-own-from-step-3-above-and-adjust-the-amount-you-want-to-stake"}},[a._v("#")]),a._v(" 6. Join the network as a new validator: replace "),t("code",[a._v("<MONIKER>")]),a._v(" with your own from step 3 above, and adjust the amount you want to stake")]),a._v(" "),t("p",[a._v("(remember 1 SCRT = 1,000,000 uSCRT, and so the command below stakes 100k SCRT).")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli tx staking create-validator "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("100000000000uscrt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --pubkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmad tendermint show-validator"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-max-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.20"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-max-change-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --min-self-delegation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --gas"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --gas-prices"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.025uscrt"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("MONIKER"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"_7-check-that-you-have-been-added-as-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-check-that-you-have-been-added-as-a-validator"}},[a._v("#")]),a._v(" 7. Check that you have been added as a validator:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli q staking validators "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.[] | select(.description.moniker == \"<MONIKER>\")'")]),a._v("\n")])])]),t("p",[a._v("Or run: "),t("code",[a._v("enigmacli q staking validators | grep moniker")]),a._v(". You should see your moniker listed.")]),a._v(" "),t("h2",{attrs:{id:"dangers-in-running-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dangers-in-running-a-validator"}},[a._v("#")]),a._v(" Dangers in running a validator")]),a._v(" "),t("p",[a._v("There are a couple of scenarios that can lead to losing a precentage of your and your delegators' stake. These are called slashing events.")]),a._v(" "),t("p",[a._v("The following is updated as of March 23, 2020.")]),a._v(" "),t("h3",{attrs:{id:"slashing-for-downtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing-for-downtime"}},[a._v("#")]),a._v(" Slashing for downtime")]),a._v(" "),t("p",[a._v("Conditions for downtime:")]),a._v(" "),t("ul",[t("li",[a._v("Signing less than 2500 blocks out of every 5000-block window. For a block time of 5.8 seconds, this roughly translates to being up for 4 hours out of every 8-hour window.")])]),a._v(" "),t("p",[a._v("Penalties for downtime:")]),a._v(" "),t("ul",[t("li",[a._v("Slashing of 1% of your and your delegators' staking amount.")]),a._v(" "),t("li",[a._v("Jailing for 10 minutes of your validator node. You don't earn block rewards for this period and at the end must manually unjail your node with "),t("code",[a._v("enigmacli tx slashing unjail --from=<key-alias>")]),a._v(".")])]),a._v(" "),t("h3",{attrs:{id:"slashing-for-double-signing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing-for-double-signing"}},[a._v("#")]),a._v(" Slashing for double-signing")]),a._v(" "),t("p",[a._v("Conditions for double-signing:")]),a._v(" "),t("ul",[t("li",[a._v("Your validator signs the same block height twice.")])]),a._v(" "),t("p",[a._v("Penalties for double-signing:")]),a._v(" "),t("ul",[t("li",[a._v("Slashing of 5% of your and your delegators' staking amount.")]),a._v(" "),t("li",[a._v("Jailing forever (tombstoned) of your validator node. You cannot earn block rewards anymore with this validator and you and your delegators must redelegate your stake to a different validator.")])]),a._v(" "),t("h2",{attrs:{id:"protecting-your-validator-agains-ddos-attacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protecting-your-validator-agains-ddos-attacks"}},[a._v("#")]),a._v(" Protecting your validator agains DDoS attacks")]),a._v(" "),t("p",[a._v("See "),t("RouterLink",{attrs:{to:"/validators-and-full-nodes/sentry-nodes.html"}},[a._v("Sentry Nodes")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"staking-more-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking-more-tokens"}},[a._v("#")]),a._v(" Staking more tokens")]),a._v(" "),t("p",[a._v("(remember 1 SCRT = 1,000,000 uSCRT)")]),a._v(" "),t("p",[a._v("In order to stake more tokens beyond those in the initial transaction, run:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli tx staking delegate "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("val -a"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("uscrt --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"renaming-your-moniker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renaming-your-moniker"}},[a._v("#")]),a._v(" Renaming your moniker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli tx staking edit-validator --moniker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("new-moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"seeing-your-rewards-from-being-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeing-your-rewards-from-being-a-validator"}},[a._v("#")]),a._v(" Seeing your rewards from being a validator")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli q distribution rewards "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"seeing-your-commissions-from-your-delegators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeing-your-commissions-from-your-delegators"}},[a._v("#")]),a._v(" Seeing your commissions from your delegators")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli q distribution commission "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("val"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"withdrawing-rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawing-rewards"}},[a._v("#")]),a._v(" Withdrawing rewards")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli tx distribution withdraw-rewards "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("val -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"withdrawing-rewards-commissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawing-rewards-commissions"}},[a._v("#")]),a._v(" Withdrawing rewards+commissions")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli tx distribution withdraw-rewards "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("enigmacli keys show --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("val -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --commission\n")])])]),t("h2",{attrs:{id:"removing-your-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removing-your-validator"}},[a._v("#")]),a._v(" Removing your validator")]),a._v(" "),t("p",[a._v("Currently deleting a validator is not possible. If you redelegate or unbond your self-delegations then your validator will become offline and all your delegators will start to unbond.")])])}),[],!1,null,null,null);s.default=r.exports}}]);