import { FunctionComponent } from 'react';

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
import NpcBronzeDragonflightRecruiter
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcBronzeDragonflightRecruiter';
import SpellBronzeDragonflightPledgePin
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBronzeDragonflightPledgePin';
import NpcBlueDragonflightRecruiter
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcBlueDragonflightRecruiter';
import SpellBlueDragonflightPledgePin
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBlueDragonflightPledgePin';
import NpcGreenDragonflightRecruiter
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcGreenDragonflightRecruiter';
import SpellGreenDragonflightPledgePin
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGreenDragonflightPledgePin';
import NpcRedDragonflightRecruiter from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcRedDragonflightRecruiter';
import SpellRedDragonflightPledgePin
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellRedDragonflightPledgePin';
import NpcBlackDragonflightRecruiter
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcBlackDragonflightRecruiter';
import SpellBlackDragonflightPledgePin
    from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBlackDragonflightPledgePin';
import NpcEchoofDoragosa from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcEchoofDoragosa';
import NpcOvergrownAncient from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcOvergrownAncient';
import NpcCrawth from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcCrawth';
import NpcVexamus from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcVexamus';
import NpcVileLasher from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcVileLasher';
import NpcHungryLasher from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcHungryLasher';
import SpellDetonationSeeds from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellDetonationSeeds';
import NpcAggravatedSkitterfly from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAggravatedSkitterfly';
import SpellDartingSting from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellDartingSting';
import SpellAgitation from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellAgitation';
import SpellBurstForth from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBurstForth';
import SpellGerminate from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGerminate';
import SpellBranchOut from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBranchOut';
import SpellHealingTouch from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellHealingTouch';
import NpcAncientBranch from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAncientBranch';
import SpellSplinterbark from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellSplinterbark';
import SpellAbundance from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellAbundance';
import SpellBarkbreaker from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellBarkbreaker';
import SpellLasherToxin from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellLasherToxin';
import NpcGuardianSentry from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcGuardianSentry';
import SpellDeadlyWinds from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellDeadlyWinds';
import SpellExpelIntruders from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellExpelIntruders';
import SpellStormSlash from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellStormSlash';
import NpcTerritorialEagle from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcTerritorialEagle';
import NpcAlphaEagle from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAlphaEagle';
import SpellPeck from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellPeck';
import SpellGust from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGust';
import SpellCalloftheFlock from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellCalloftheFlock';
import SpellPlayBall from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellPlayBall';
import SpellGoaloftheRushingWinds from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGoaloftheRushingWinds';
import SpellGoaloftheSearingBlaze from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGoaloftheSearingBlaze';
import SpellOverpoweringGust from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellOverpoweringGust';
import SpellFirestorm from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellFirestorm';
import SpellGaleForce from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellGaleForce';
import SpellSavagePeck from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellSavagePeck';
import SpellDeafeningScreech from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellDeafeningScreech';
import SpellSonicVulnerability from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellSonicVulnerability';
import SpellCorruptedMana from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellCorruptedMana';
import SpellSurge from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellSurge';
import SpellManaVoid from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellManaVoid';
import NpcArcaneForager from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcArcaneForager';
import SpellViciousLunge from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellViciousLunge';
import NpcArcaneRavager from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcArcaneRavager';
import SpellViciousAmbush from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellViciousAmbush';
import SpellRiftbreath from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellRiftbreath';
import NpcSpellboundBattleaxe from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcSpellboundBattleaxe';
import SpellSeveringSlash from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellSeveringSlash';
import NpcSpellboundScepter from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcSpellboundScepter';
import SpellMysticBlast from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellMysticBlast';
import SpellArcaneRain from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneRain';
import NpcUnrulyTextbook from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcUnrulyTextbook';
import SpellMonotonousLecture from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellMonotonousLecture';
import NpcProfessorMaxdormu from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcProfessorMaxdormu';
import SpellRecallHistory from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellRecallHistory';
import SpellManaBombs from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellManaBombs';
import SpellArcaneFissure from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneFissure';
import SpellArcaneOrbs from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneOrbs';
import SpellOversurge from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellOversurge';
import SpellArcaneExpulsion from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneExpulsion';
import SpellAstralWhirlwind from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellAstralWhirlwind';
import NpcAlgetharEnforcer from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAlgetharEnforcer';
import NpcAlgetharSecurity from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAlgetharSecurity';
import SpellDisruptingPulse from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellDisruptingPulse';
import NpcAlgetharEducator from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAlgetharEducator';
import SpellAstralBomb from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellAstralBomb';
import SpellArcaneMissiles from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneMissiles';
import NpcAlgetharNurse from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Npcs/NpcAlgetharNurse';
import SpellCelestialShield from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellCelestialShield';
import SpellAstralBreath from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellAstralBreath';
import SpellOverwhelmingPower from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellOverwhelmingPower';
import SpellArcaneRift from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellArcaneRift';
import SpellUncontrolledEnergy from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellUncontrolledEnergy';
import SpellEnergyBomb from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellEnergyBomb';
import SpellPowerVacuum from '../../src/WoWGuides/Dungeons/AlgetharAcademy/Spells/SpellPowerVacuum';

const AlgetharAcademy: FunctionComponent = () => (
    <Layout>
        <Dungeon>AlGeth&apos;ar Academy</Dungeon>

        <GettingThere>Fly to Thaldraszus. North.</GettingThere>

        <Section>
            <SectionTitle>Bonuses and How to Obtain them</SectionTitle>

            <Tips>
                <Tip>
                    <NpcBronzeDragonflightRecruiter />: <SpellBronzeDragonflightPledgePin />, 5% Haste.
                </Tip>
                <Tip>
                    <NpcBlueDragonflightRecruiter />: <SpellBlueDragonflightPledgePin />, Mastery Rating.
                </Tip>
                <Tip>
                    <NpcGreenDragonflightRecruiter />: <SpellGreenDragonflightPledgePin />, 10% increased healing.
                </Tip>
                <Tip>
                    <NpcRedDragonflightRecruiter />: <SpellRedDragonflightPledgePin />, 5% Versatility.
                </Tip>
                <Tip>
                    <NpcBlackDragonflightRecruiter />: <SpellBlackDragonflightPledgePin />, 5% Critical Strike.
                </Tip>
            </Tips>
        </Section>

        <Section>
            <SectionTitle>Boss Order in Algeth&apos;ar Academy</SectionTitle>

            <p>
                <NpcEchoofDoragosa /> unlocks upon defeating first 3 bosses: <NpcOvergrownAncient />, <NpcCrawth />,
                and <NpcVexamus />.
            </p>
        </Section>

        <Section>
            <SectionTitle>Trash Before Overgrown Ancient</SectionTitle>

            <p>
                Right from The Quad, up the stairs. <NpcOvergrownAncient /> is inactive until you defeat
                <NpcVileLasher /> and <NpcHungryLasher />.
            </p>

            <Tips>
                <Tip>
                    <NpcVileLasher /> has a <SpellDetonationSeeds /> ground effect. Disorients.
                </Tip>
                <Tip>
                    With every <NpcVileLasher /> stand a dozen <NpcHungryLasher />. They just auto-attack.
                </Tip>
                <Tip>
                    <NpcAggravatedSkitterfly /> does high damage with instant <SpellDartingSting /> while charging
                    at players, and occasionally cast <SpellAgitation />, stackable Enrage effect increasing damage
                    done. Use cooldowns and kill them at all costs.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Overgrown Ancient</BossTitle>

            <p>Upon reaching max Energy, cast <SpellBurstForth />. Does heavy damage.</p>

            <Tips>
                <Tip>
                    Stack together and move one direction when <SpellGerminate /> cast is going though.
                    Cleave <NpcHungryLasher />s.
                </Tip>
                <Tip>Sidestep the <SpellBranchOut /> cast.</Tip>
                <Rupt><SpellHealingTouch /> from <NpcAncientBranch /> at all costs.</Rupt>
                <Tip>
                    Killing <SpellSplinterbark /> casts <SpellAbundance />, healing allies and players and removing
                    applications of the <SpellSplinterbark /> bleed. Time its death when <NpcHungryLasher /> are close
                    to dying to prevent them from healing to full health.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Use active mitigation against <SpellBarkbreaker />.
                </Tank>
                <Tank>
                    Taunt the <NpcAncientBranch /> as soon as it spawns.
                </Tank>
                <Tank>
                    Once boss casts <SpellBurstForth />, collect threat on everyone one of the <NpcHungryLasher />.
                    They have a special Poison attack, <SpellLasherToxin />, pick up threat and nuke them.
                </Tank>
                <Tank>Use defensive cooldowns when <SpellBurstForth /> is about to happen.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    As soon as boss cast <NpcAncientBranch />, it apples <SpellSplinterbark /> bleed effect on entire
                    party. Top up people at all time especially before <SpellBurstForth />.
                </Healer>
                <Healer>Top up party after <SpellBurstForth />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Crawth</SectionTitle>

            <p>Use the invisible bridge towards the middle platform. Kill the mini-boss <NpcGuardianSentry />.</p>

            <Tips>
                <Tip>
                    Avoid <SpellDeadlyWinds /> ground animation.
                    After initial hit, tornado circles around for several seconds.
                </Tip>
                <Tip>
                    Run away from <SpellExpelIntruders />, will knock back and deal high damage. You can LoS the damage.
                </Tip>
                <Tank><SpellStormSlash /> = tank-buster ability. Use mitigation if low on health.</Tank>
            </Tips>

            <p>
                Head towards the area of <NpcCrawth />.
                Clear 3 waves of <NpcTerritorialEagle /> and <NpcAlphaEagle />.
            </p>

            <Tips>
                <Tip>
                    <NpcTerritorialEagle /> cast <SpellPeck /> on highest-threat target (tank). Initial damage and
                    stackable Bleed effect.
                </Tip>
                <Rupt>
                    <NpcAlphaEagle /> come in waves 2 and 3. <SpellGust /> is a frontal to sidestep, and
                    <SpellCalloftheFlock /> is a buff to interrupt.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Crawth</BossTitle>

            <p>
                Throw 3 <SpellPlayBall /> in the fire ring to spawn the boss. <SpellGoaloftheRushingWinds /> and
                <SpellGoaloftheSearingBlaze /> are temporary buffs but also makes the fight more difficult.
                Boss actives the Goals at 75% and 45% hp.
            </p>

            <Tips>
                <Tip>
                    Dodge the <SpellOverpoweringGust /> frontal.
                </Tip>
                <Tip>
                    When boss reaches 75% and 45% HP, time to score goals.
                </Tip>
                <Tip>
                    <SpellGoaloftheSearingBlaze /> triggers <SpellFirestorm />, making <NpcCrawth /> take 75% increased
                    damage for 12 sec, but casting fire motes on the ground. <SpellFirestorm /> barrages the arena
                    until the end of the fight.
                </Tip>
                <Tip>
                    <SpellGoaloftheRushingWinds /> triggers <SpellGaleForce />, granting 45% Hast and 50% move speed.
                    Summons Roving Cyclones until the end. <SpellGaleForce /> winds continue until the end of fight.
                </Tip>
                <Tip>
                    Trigger <SpellGoaloftheSearingBlaze /> firsth, and use cooldowns with damage increase effect.
                    Delayt <SpellGoaloftheRushingWinds /> as much as you can, having both negative effects make the
                    fight hell.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Use mitigation when <NpcCrawth /> casts <SpellSavagePeck />.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Top up teammates when <NpcCrawth /> casts <SpellDeafeningScreech />. Follow-up stackable effect
                    <SpellSonicVulnerability />, which can only be cleared scoring goals with
                    <SpellGoaloftheRushingWinds /> or <SpellGoaloftheSearingBlaze />.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Vexamus</SectionTitle>

            <Tips>
                <Rupt>
                    <SpellCorruptedMana /> casts <SpellSurge /> and <SpellManaVoid />. None are life threatening.
                    Spare interrupts can be used.
                </Rupt>
                <Tip>
                    <NpcArcaneForager /> is no danger. Casts <SpellViciousLunge /> on random target, tiny bit of damage.
                </Tip>
                <Tip>
                    <NpcArcaneRavager /> charges the furthest target with <SpellViciousAmbush />, and has a deadly
                    channeled frontal <SpellRiftbreath />, dodge it all costs!
                </Tip>
                <Tip>
                    <NpcSpellboundBattleaxe /> = tank crusher, due to <SpellSeveringSlash />. Initial damage and harsh
                    follow-up Bleed effect.
                </Tip>
                <Tip>
                    <NpcSpellboundScepter /> = most dangerous mob. <SpellMysticBlast /> does AoE damage to everyone
                    in your party. Casts <SpellArcaneRain />, sidestep at all costs, high damage upon contact.
                </Tip>
                <Rupt>
                    Rupt <NpcUnrulyTextbook />&apos;s <SpellMonotonousLecture />, crowd-controls you for a long time.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Vexamus</BossTitle>

            <p>
                Defeat 3 packs of mob. <NpcProfessorMaxdormu /> will begin casting <SpellRecallHistory /> which will
                summon <NpcVexamus />. Generates Energy, gaining more if it soaks any <SpellManaBombs />. When reaching
                100 Energy, casts <SpellArcaneFissure />, a powerful cast. Use personal defensives.
            </p>

            <Tips>
                <Tip>
                    <NpcProfessorMaxdormu /> will ocasionally spawn 5 <SpellArcaneOrbs />, slowly traveling towards
                    <NpcVexamus />. Do not let it soak them, will deal AoE damage to entire group and add 20 Energy.
                    Take orbs with a defensive or let tank soak most of them. Will also add <SpellOversurge /> debuff.
                </Tip>
                <Tip>
                    Avoid <SpellCorruptedMana /> pool, from last tick of <SpellManaBombs />. Deals damage and
                    slows you every second you spend in it.
                </Tip>
                <Tip>Sidestep the Arcane ground pools after the <SpellArcaneFissure /> pushback.</Tip>
            </Tips>

            <TankTips>
                <Tank>You can soak several <SpellArcaneOrbs />, but care initial damage. Use active mitigation.</Tank>
                <Tank>Aim the <SpellArcaneExpulsion /> frontal away from the team.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    <SpellManaBombs /> goes on 3 random players with damage-over-time. Top them up quickly.
                </Healer>
                <Healer>Use healing cooldowns once the boss casts <SpellArcaneFissure />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Echo of Doragosa</SectionTitle>

            <p>Head towards The Headteacher&apos;s Enclave. Trash mobs are easy.</p>

            <Tips>
                <Tip>
                    Watch out <SpellAstralWhirlwind /> from <NpcAlgetharEnforcer />, dangerous for melee players.
                </Tip>
                <Tip>
                    <NpcAlgetharSecurity />&apos;s <SpellDisruptingPulse /> = powerful AoE damage. Can LoS the spell.
                    Cannot interrupt it, and if you use stuns it will just recast.
                </Tip>
                <Rupt>
                    <NpcAlgetharEducator /> has an <SpellAstralBomb /> working on enemy mobs. Stay with the bomb near
                    them and they will take the full damage. <SpellArcaneMissiles /> must be rupted.
                </Rupt>
                <p>
                    <NpcAlgetharNurse /> has <SpellCelestialShield />. Cast when they are low on health. Cannot be
                    rupted and will recast after Stun/Interrupt. Use Purge effects to remove it.
                </p>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Echo of Doragosa</BossTitle>

            <p>
                Casts <SpellAstralBreath /> at 100 Energy. <SpellOverwhelmingPower /> debuff gives 5% increased damage
                per stack to a maximum of 4 stacks. At 4 stacks, you trigger <SpellArcaneRift /> and lose all stacks.
                <SpellArcaneRift /> casts <SpellUncontrolledEnergy />, making the fight more difficult.
                Deliberatly take 1-2 stacks of <SpellOverwhelmingPower /> for more damage. Each of
                <NpcEchoofDoragosa />&apos;s ability applies one stack.
            </p>

            <Tips>
                <Tip>
                    Use personal defensive when you get an <SpellEnergyBomb /> cast on you.
                </Tip>
                <Tip>Run awaty from <SpellPowerVacuum /> at all costs.</Tip>
                <Tip>Avoid the <SpellAstralBreath /> frontal. Will likely kill you.</Tip>
                <Tip>
                    Take only a few stacks of <SpellOverwhelmingPower />. Account for unavoidable damage, since each
                    of <NpcEchoofDoragosa />&apos;s abilities apply a stack. Do not spawn <SpellArcaneRift /> out of
                    pure greed.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Tank in a corner and be conservative with space. Can become a nightmare with multiple
                    <SpellArcaneRift />
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>Spot-heal the target that gets the <SpellEnergyBomb />.</Healer>
                <Healer>
                    Boss occasionally cast <SpellArcaneMissiles /> on random target, top them up quickly.
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default AlgetharAcademy;
