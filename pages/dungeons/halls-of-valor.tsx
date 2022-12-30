import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Dungeon from '../../src/WoWGuides/Dungeons/Components/Dungeon';
import Layout from '../../src/Shared/Layout/Component/Layout';
import GettingThere from '../../src/WoWGuides/GettingThere/Components/GettingThere';
import Section from '../../src/WoWGuides/Section/Components/Section';
import SectionTitle from '../../src/WoWGuides/Section/Components/SectionTitle';
import Tips from '../../src/WoWGuides/Tips/Components/Tips';
import Tip from '../../src/WoWGuides/Tips/Components/Tip';
import Rupt from '../../src/WoWGuides/Tips/Components/Rupt';
import BossSection from '../../src/WoWGuides/Section/Components/BossSection';
import BossTitle from '../../src/WoWGuides/Section/Components/BossTitle';
import TankTips from '../../src/WoWGuides/Tips/Components/TankTips';
import Tank from '../../src/WoWGuides/Tips/Components/Tank';
import HealerTips from '../../src/WoWGuides/Tips/Components/HealerTips';
import Healer from '../../src/WoWGuides/Tips/Components/Healer';
import SpellOdynsFavor from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellOdynsFavor';
import NpcHyrja from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcHyrja';
import NpcFenryr from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcFenryr';
import SpellOdynsBlessing from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellOdynsBlessing';
import NpcValarjarChampion from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarChampion';
import SpellPowerAttack from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellPowerAttack';
import SpellEnragedRegeneration from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellEnragedRegeneration';
import NpcValarjarThundercaller from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarThundercaller';
import SpellThunderstrike from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellThunderstrike';
import SpellThunderousBolt from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellThunderousBolt';
import SpellCracklingStorm from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCracklingStorm';
import SpellLightningBreath from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellLightningBreath';
import SpellDancingBlade from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellDancingBlade';
import SpellHornofValor from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellHornofValor';
import SpellStaticField from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellStaticField';
import SpellBallLightning from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBallLightning';
import SpellBloodlettingSweep from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBloodlettingSweep';
import SpellBloodlust from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBloodlust';
import NpcValarjarRunecarver from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarRunecarver';
import SpellEtch from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellEtch';
import SpellShatteredRune from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellShatteredRune';
import SpellHolyRadiance from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellHolyRadiance';
import NpcValarjarMystic from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarMystic';
import SpellRuneofHealing from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRuneofHealing';
import NpcValarjarShieldmaiden from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarShieldmaiden';
import SpellBreachArmor from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBreachArmor';
import SpellMortalHew from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellMortalHew';
import NpcStormforgedSentinel from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcStormforgedSentinel';
import SpellChargedPulse from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellChargedPulse';
import SpellCrackle from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCrackle';
import SpellProtectiveLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellProtectiveLight';
import NpcValarjarPurifier from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarPurifier';
import SpellCleansingFlames from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCleansingFlames';
import NpcValarjarAspirant from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarAspirant';
import SpellBlastofLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBlastofLight';
import SpellValkyrasAdvance from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellValkyrasAdvance';
import NpcSolsten from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcSolsten';
import SpellEyeoftheStorm from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellEyeoftheStorm';
import SpellArcingBolt from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellArcingBolt';
import NpcOlmyrtheEnlightened from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcOlmyrtheEnlightened';
import SpellSanctify from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSanctify';
import SpellSearingLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSearingLight';
import SpellShieldofLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellShieldofLight';
import SpellExpelLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellExpelLight';
import NpcValarjarMarksman from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcValarjarMarksman';
import SpellSnapShot from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSnapShot';
import SpellLeaptoSafety from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellLeaptoSafety';
import SpellPenetratingShot from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellPenetratingShot';
import NpcAngerhoofBull from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcAngerhoofBull';
import SpellRumblingStomp from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRumblingStomp';
import SpellEnrage from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellEnrage';
import NpcSteeljawGrizzly from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcSteeljawGrizzly';
import SpellCrunchArmor from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCrunchArmor';
import SpellRendingClaws from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRendingClaws';
import SpellCharge from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCharge';
import NpcEbonclawWorg from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcEbonclawWorg';
import SpellLeapfortheThroat from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellLeapfortheThroat';
import SpellLickingWounds from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellLickingWounds';
import SpellClawFrenzy from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellClawFrenzy';
import SpellUnnervingHowl from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellUnnervingHowl';
import SpellScentofBlood from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellScentofBlood';
import SpellRavenousLeap from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRavenousLeap';
import NpcKingRanulf from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcKingRanulf';
import NpcKingHaldor from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcKingHaldor';
import NpcKingBjorn from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcKingBjorn';
import NpcKingTor from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcKingTor';
import SpellUnrulyYell from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellUnrulyYell';
import SpellSever from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSever';
import SpellWickedDagger from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellWickedDagger';
import SpellCallAncestor from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellCallAncestor';
import SpellAegisofAggramar from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellAegisofAggramar';
import NpcGodKingSkovald from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcGodKingSkovald';
import SpellFelblazeRush from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellFelblazeRush';
import SpellRagnarok from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRagnarok';
import SpellConsumingFlame from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellConsumingFlame';
import SpellInfernalFlames from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellInfernalFlames';
import SpellSavageBlade from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSavageBlade';
import NpcOdyn from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcOdyn';
import SpellRunicBrand from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRunicBrand';
import SpellBranded from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellBranded';
import SpellUnworthy from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellUnworthy';
import SpellSummonStormforgedObliterator
    from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSummonStormforgedObliterator';
import NpcStormforgedObliterator from '../../src/WoWGuides/Dungeons/HallsOfValor/Npcs/NpcStormforgedObliterator';
import SpellSurge from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSurge';
import SpellSpearofLight from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellSpearofLight';
import SpellGlowingFragment from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellGlowingFragment';
import SpellShatterSpears from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellShatterSpears';
import SpellRadiantTempest from '../../src/WoWGuides/Dungeons/HallsOfValor/Spells/SpellRadiantTempest';

const HallsOfValor: FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Halls of Valor</title>
        </Head>

        <Dungeon>Halls of Valor</Dungeon>

        <GettingThere>East coast of Stormheim, Broken Isles.</GettingThere>

        <Section>
            <SectionTitle>Unique Bonuses in Halls of Valor</SectionTitle>

            <Tips>
                <Tip>
                    <SpellOdynsFavor /> after defeating either <NpcHyrja /> or <NpcFenryr />. 75% move speed.
                </Tip>
                <Tip>
                    <SpellOdynsBlessing /> after defeating both, 150% move speed.
                </Tip>
            </Tips>
        </Section>

        <Section>
            <SectionTitle>Trash Before Hymdall</SectionTitle>

            <Tips>
                <Tank>
                    Care for <NpcValarjarChampion />&apos;s <SpellPowerAttack />. Several mobs will cause trouble.
                    Once under 30% health, casts <SpellEnragedRegeneration /> once per combat.
                </Tank>
                <Rupt>
                    Focus on <NpcValarjarThundercaller />. <SpellThunderstrike /> on random player is dangerous.
                    Rupt <SpellThunderousBolt />.
                </Rupt>
                <Tip>
                    Avoid <SpellCracklingStorm /> ground animation from Stormdrake,
                    and frontal <SpellLightningBreath />.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Hymdall</BossTitle>

            <Tips>
                <Tip>Avoid being hit by <SpellDancingBlade />.</Tip>
                <Tip>
                    Once <SpellHornofValor /> is cast, look for Storm Drake. Avoid the follow-up <SpellStaticField />
                    and the newly spawned <SpellBallLightning />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Use active mitigation on <SpellBloodlettingSweep />, follow up Bleed effect is tough.</Tank>
                <Tank>Move the boss in safe zones.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Spot-hezal tank when hit by <SpellBloodlettingSweep />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Hyrja</SectionTitle>

            <p>Go right first. Save 2nd <SpellBloodlust /> for <NpcFenryr />.</p>
            <p>The Mugs of Mead will distract mobs, to skip them without Invisibility Potions.</p>

            <Tips>
                <Rupt>
                    <NpcValarjarRunecarver /> = primary target to rupt, especially <SpellEtch />.
                    <SpellShatteredRune /> on random targets, defeat asap.
                </Rupt>
                <Rupt>
                    Stop healing of <SpellHolyRadiance /> by <NpcValarjarMystic /> at all costs. Do not let mobs stand
                    in <SpellRuneofHealing />, but the effect works on you too.
                </Rupt>
                <Tank>
                    Pay attention to <NpcValarjarShieldmaiden />&apos;s <SpellBreachArmor /> stacking debuff. Has a
                    frontal cleave <SpellMortalHew />, and apply 10% reduced healing debuff.
                </Tank>
                <Tip>
                    <NpcStormforgedSentinel />&apos;s <SpellChargedPulse /> damages everyone within 15 yard.
                    Sidestep any incoming <SpellCrackle />s and purge <SpellProtectiveLight /> once below 30% health.
                </Tip>
                <Rupt>
                    <NpcValarjarPurifier /> = least dangerous. Side step ground puddles from <SpellCleansingFlames />
                    or rupt it.
                </Rupt>
                <Tip>
                    <NpcValarjarAspirant />&apos;s <SpellBlastofLight /> = frontal, might one-shot. Ccasionally cast
                    <SpellValkyrasAdvance />, leaping to a random player, healer should top up.
                </Tip>
            </Tips>

            <p>Defeat the 2 mini-bosses in front of <NpcHyrja />.</p>

            <Tips>
                <Tip>
                    <NpcSolsten /> = heal test. <SpellEyeoftheStorm /> damages everyone around. Stand in lighting zone
                    to reduce incoming damage. <SpellArcingBolt /> is cast ocasionally.
                </Tip>
                <Rupt>
                    <NpcOlmyrtheEnlightened /> is easier. Stand outside of melee to avoid orbs from <SpellSanctify />,
                    interrupt <SpellSearingLight />.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Hyrja</BossTitle>

            <p>
                HPS-intensive. 2 phases: Mystic Empowerment: Thunder (<NpcSolsten />) and Mystic Empowerment: Holy
                <NpcOlmyrtheEnlightened />). Stay where <NpcSolsten /> was to trigger Thunder.
                Stay where <NpcOlmyrtheEnlightened /> was to trigger Holy. Plus, boss gains stacks which will amplify
                the current Empowerment phase, hence you want to avoid back-to-back phases of the same Empowerment.
            </p>

            <Tips>
                <Tip>
                    Stay under Lighting Shield once <NpcHyrja /> is casting <SpellEyeoftheStorm /> during Mystic
                    Empowerment: Thunder phase.
                </Tip>
                <Tip>
                    Avoid being stacked at all time due to <SpellArcingBolt />, only stack under Lighting Shield for
                    <SpellEyeoftheStorm /> cast.
                </Tip>
                <Tip>Avoid <SpellShieldofLight /> frontal.</Tip>
                <Tip>Dodge orbs from <SpellSanctify /> when <NpcHyrja /> is under Mystic Empowement: Holy.</Tip>
                <Tip>
                    <SpellExpelLight /> goes on random target, followed by bouncing to the nearest target upon expiring.
                    Swap between each other when you have defensive cooldowns. Avoir bouncing the debuff back to the
                    original recipient.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Never tank <NpcHyrja /> in the middle, not to get both Mystic Empowerments.</Tank>
                <Tank>
                    Swap between Mystic Empowerments and rarely do the same twice in a row, unless healer is confident
                    they can handle it.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Use healing cooldowns once <NpcHyrja /> is casting <SpellEyeoftheStorm /> during Mystic
                    Empowerment: Thunder phase.
                </Healer>
                <Healer>Top up players that have <SpellExpelLight /> on them.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Fenryr</SectionTitle>

            <Tips>
                <Tip>
                    <NpcValarjarMarksman /> is static, keeps casting <SpellSnapShot /> to random targets, jump out of
                    melee with <SpellLeaptoSafety />, and have hard-hitting frontal cone ability,
                    <SpellPenetratingShot /> - avoid at all costs. Focus them.
                </Tip>
                <Tip>
                    Avoid <NpcAngerhoofBull /> but if you do, step away from <SpellRumblingStomp /> and
                    Dispell <SpellEnrage />.
                </Tip>
                <Tip>
                    Clear <NpcSteeljawGrizzly />, easy to kill but <SpellCrunchArmor /> is dangerous on tank.
                    Occasionally cast <SpellRendingClaws /> on highest threat target (tank) and <SpellCharge /> the
                    first player they get threats on. Mostly tank damage, watch out tank&apos;s health.
                </Tip>
                <Tip>
                    <NpcEbonclawWorg /> = most dangerous because of <SpellLeapfortheThroat /> on random targets.
                    Stack together and use defensives if you are not full health.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Fenryr</BossTitle>

            <p>
                Determine position by following footprints. First engage downs it to 60%, upon which he will retreat
                and begin casting <SpellLickingWounds />. Abilities remain the same.
            </p>

            <Tips>
                <Tip>
                    Stack under the boss, because of <SpellClawFrenzy />. Deals damage split between all enemies within
                    12 yards. The more target it hits, the less damage each of you will take.
                </Tip>
                <Tip><SpellUnnervingHowl /> will interrupt your cast.</Tip>
                <Tip>
                    When <NpcFenryr /> summons 3 <NpcEbonclawWorg />, focus them.
                </Tip>
                <Tip>
                    Never get caught by <SpellScentofBlood />. Combat-resetting abilities will cancel the cast.
                </Tip>
                <Tip>
                    When targetted by <SpellRavenousLeap />, get out of melee so you do not cleave others. When boss
                    leaps on you, leaves permanent Bleed effect that stacks everytime.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Stack <NpcEbonclawWorg /> on top of <NpcFenryr /> for cleave.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Top up players hit by <SpellClawFrenzy />.</Healer>
                <Healer>Use healing cooldowns once to out-heal Bleed Effect from <SpellRavenousLeap />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before God-King Skovald</SectionTitle>

            <p>
                After you defeat a king, the rest will inherit its unique ability.
                <NpcKingRanulf /> first, <NpcKingHaldor />, then <NpcKingBjorn /> and <NpcKingTor />.
            </p>

            <Tips>
                <Rupt>
                    Interrupt <NpcKingRanulf />&apos;s <SpellUnrulyYell />. Auto-attacks tank.
                </Rupt>
                <Tip><NpcKingHaldor /> casts <SpellSever />on highest threat target (tank).</Tip>
                <Tip>
                    <NpcKingBjorn /> throws its <SpellWickedDagger /> to a random target, dealing damage and leaving a
                    50% reduced healing effect. Toughest King due to unavoidable damage.
                </Tip>
                <Tip>
                    Kill <NpcKingTor /> last to avoid transferring <SpellCallAncestor />. Use Crowd-control on
                    Ancestors to prevent him from healing.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>God-King Skovald</BossTitle>

            <p>Pick up the <SpellAegisofAggramar /> (extra button).</p>

            <Tips>
                <Tip>
                    <NpcGodKingSkovald /> randomly target a player with <SpellFelblazeRush />, hitting everyone
                    within 6 yards of the impact. Do not clip allies if the charge is on you.
                </Tip>
                <Tip>During <SpellRagnarok /> stand behind the <SpellAegisofAggramar />.</Tip>
                <Tip>
                    Kite away the Flame of Woe, randomly fixating someone. Will eventually die to
                    <SpellConsumingFlame /> and leave a fire patch behind them, <SpellInfernalFlames />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Use active mitigation against <SpellSavageBlade />.</Tank>
                <Tank>
                    Boss will pick up the <SpellAegisofAggramar /> himself after <SpellRagnarok /> to use it and
                    summoning Flame of Woe. Tank boss closer to Flame of Woe for cleave.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>Top the health of players hit by <SpellFelblazeRush />.</Healer>
                <Healer>Quickly spot-heal players hit by <SpellRagnarok />.</Healer>
            </HealerTips>
        </BossSection>

        <BossSection>
            <BossTitle>Odyn</BossTitle>

            <p>Speak to <NpcOdyn />.</p>

            <p>
                Once boss catches <SpellRunicBrand />, everyone receives a random branded sign. Connecting it to the
                right rune will give <SpellBranded /> buff. Battle-resurrections will not work, players killed will be
                deemed <SpellUnworthy />. Boss fight ends when <NpcOdyn /> reaches 80%. health.
            </p>

            <Tips>
                <Rupt>
                    When boss casts <SpellSummonStormforgedObliterator />, focus <NpcStormforgedObliterator /> and stop
                    every cast of <SpellSurge />. Stuns also work.
                </Rupt>
                <Tip>Avoid <SpellSpearofLight /> and follow-up <SpellGlowingFragment />.</Tip>
                <Tip>
                    After <SpellShatterSpears />, stay away from <SpellSpearofLight /> before the cast goes off, making
                    it easier to avoid all the <SpellGlowingFragment />s.
                </Tip>
                <Tip>Use move speed abilities to get away from <SpellRadiantTempest />.</Tip>
                <Tip>During <SpellRunicBrand />, connect to the rune quickly. Easier by colors than by shape.</Tip>
                <Tip>Use <SpellBloodlust /> during <SpellBranded /> to speed up the fight.</Tip>
            </Tips>

            <TankTips>
                <Tank>Tank <NpcStormforgedObliterator /> close to <NpcOdyn /> for cleave.</Tank>
                <Tank>Move boss away from <SpellSpearofLight />s, makes dodging <SpellGlowingFragment />s easier.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Top up players quickly if they get hit by <SpellGlowingFragment />. Remember killed players will be
                    <SpellUnworthy /> and will not be able to be resurrected.
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default HallsOfValor;
