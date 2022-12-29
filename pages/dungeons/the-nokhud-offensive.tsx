import { FunctionComponent } from 'react';

import Dungeon from '../../src/WoWGuides/Dungeons/Components/Dungeon';
import Layout from '../../src/Shared/Layout/Component/Layout';
import GettingThere from '../../src/WoWGuides/GettingThere/Components/GettingThere';
import Npc from '../../src/WoWGuides/Tags/Components/Npc';
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
import NpcBalakarKhan from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcBalakarKhan';
import NpcGranyth from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcGranyth';
import NpcTheRagingTempest from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcTheRagingTempest';
import NpcTeera from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcTeera';
import NpcMaruuk from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcMaruuk';
import SpellDragonkillerLance from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDragonkillerLance';
import SpellEruption from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellEruption';
import NpcNokhudLancemaster from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudLancemaster';
import NpcNokhudLongbow from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudLongbow';
import SpellShoot from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellShoot';
import SpellRainofArrows from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellRainofArrows';
import SpellMultiShot from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellMultiShot';
import NpcNokhudWarspear from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudWarspear';
import SpellPierce from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellPierce';
import SpellRallytheClan from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellRallytheClan';
import NpcNokhudHornsounder from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudHornsounder';
import SpellCleavingStrikes from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellCleavingStrikes';
import SpellWarStomp from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellWarStomp';
import SpellDisruptiveShout from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDisruptiveShout';
import SpellTectonicStomp from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellTectonicStomp';
import NpcNokhudSaboteur from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudSaboteur';
import SpellDismantle from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDismantle';
import SpellShardsofStone from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellShardsofStone';
import NpcStormcallerBoroo from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcStormcallerBoroo';
import NpcStormcallerArynga from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcStormcallerArynga';
import NpcStormcallerZarii from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcStormcallerZarii';
import SpellTotemicOverload from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellTotemicOverload';
import NpcPrimalistStormspeaker from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcPrimalistStormspeaker';
import SpellTempest from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellTempest';
import NpcPrimalistThunderbeast from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcPrimalistThunderbeast';
import SpellChainLightning from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellChainLightning';
import SpellThunderClap from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellThunderClap';
import SpellStormshield from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellStormshield';
import NpcPrimalStormshield from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcPrimalStormshield';
import Spell from '../../src/WoWGuides/Tags/Components/Spell';
import SpellElectricalStorm from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellElectricalStorm';
import SpellLightningStrike from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellLightningStrike';
import SpellUncontrollableEnergy
    from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellUncontrollableEnergy';
import SpellTheRagingTempest from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellTheRagingTempest';
import SpellElectricalOverload from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellElectricalOverload';
import SpellWindBurst from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellWindBurst';
import SpellEnergySurge from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellEnergySurge';
import NpcSoulharvesterDuuren from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcSoulharvesterDuuren';
import NpcSoulharvesterGaltmaa from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcSoulharvesterGaltmaa';
import NpcSoulharvesterTumen from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcSoulharvesterTumen';
import NpcSoulharvesterMandakh from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcSoulharvesterMandakh';
import SpellDeathBoltVolley from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDeathBoltVolley';
import SpellShatterSoul from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellShatterSoul';
import SpellHarvestSoul from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellHarvestSoul';
import SpellConsumedSoul from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellConsumedSoul';
import NpcUkhelDeathspeaker from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcUkhelDeathspeaker';
import SpellGraspoftheDead from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellGraspoftheDead';
import SpellChantoftheDead from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellChantoftheDead';
import NpcUkhelBeastcaller from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcUkhelBeastcaller';
import SpellDevourSpirit from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDevourSpirit';
import SpellSoulInfusedWeapon from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellSoulInfusedWeapon';
import SpellHeavySlash from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellHeavySlash';
import SpellDesecratingRoar from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDesecratingRoar';
import SpellNecroticEruption from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellNecroticEruption';
import NpcUkhelCorruptor from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcUkhelCorruptor';
import SpellDominate from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellDominate';
import NpcUkhelWillcrusher from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcUkhelWillcrusher';
import SpellTremorTotem from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellTremorTotem';
import SpellLifeLink from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellLifeLink';
import SpellGaleArrow from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellGaleArrow';
import SpellEarthsplitter from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellEarthsplitter';
import SpellFrightfulRoar from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellFrightfulRoar';
import SpellGuardianWind from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellGuardianWind';
import SpellAncestralBond from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellAncestralBond';
import SpellSpiritLeap from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellSpiritLeap';
import SpellBrutalize from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellBrutalize';
import SpellQuickShot from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellQuickShot';
import SpellSwiftStab from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellSwiftStab';
import NpcNokhudStormcaller from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudStormcaller';
import SpellStormShock from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellStormShock';
import NpcNokhudonHoundsman from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudonHoundsman';
import SpellCommandSeek from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellCommandSeek';
import NpcBatak from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcBatak';
import NpcBalara from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcBalara';
import SpellRagingKin from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellRagingKin';
import SpellRavagingSpear from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellRavagingSpear';
import SpellBroadStomp from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellBroadStomp';
import SpellVehementCharge from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellVehementCharge';
import SpellIronSpear from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellIronSpear';
import SpellIronStampede from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellIronStampede';
import SpellUpheaval from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellUpheaval';
import SpellCracklingUpheaval from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellCracklingUpheaval';
import SpellQuake from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellQuake';
import SpellStormBolt from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellStormBolt';
import NpcNokhudStormcaster from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Npcs/NpcNokhudStormcaster';
import SpellLightning from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellLightning';
import SpellStaticSpear from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellStaticSpear';
import SpellRendingStrike from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellRendingStrike';
import SpellSavageStrike from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellSavageStrike';
import SpellStormwinds from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellStormwinds';
import SpellConductiveStrike from '../../src/WoWGuides/Dungeons/TheNokhudOffensive/Spells/SpellConductiveStrike';

const RubyLifePools: FunctionComponent = () => (
    <Layout>
        <Dungeon>The Nokhud Offensive</Dungeon>

        <GettingThere>Fly to Ohn&apos; ahran. North West.</GettingThere>

        <Section>
            <SectionTitle>Boss Order</SectionTitle>

            <p>
                As you want, but <NpcBalakarKhan /> is last. Standard route is:
            </p>

            <Tips>
                <Tip>
                    <NpcGranyth />
                </Tip>
                <Tip>
                    <NpcTheRagingTempest />
                </Tip>
                <Tip>
                    <NpcTeera /> and <NpcMaruuk />
                </Tip>
            </Tips>
        </Section>

        <Section>
            <SectionTitle>Trash before Granyth</SectionTitle>

            <p>
                Defeat the 3 <NpcNokhudLancemaster /> to attach the boss.
            </p>
            <Tips>
                <Tip>
                    <NpcNokhudLongbow /> are static. Deals unavoidable damage on random target with <SpellShoot />,
                    side-step the <SpellRainofArrows /> ground animation and their <SpellMultiShot /> frontal cone.
                </Tip>
                <Tip>
                    <NpcNokhudWarspear /> cast <SpellPierce /> on high-threat target (tank), applying blood effect.
                    Kill in priority.
                </Tip>
                <Tip>
                    Use Stun or Disruption to stop <SpellRallytheClan /> from <NpcNokhudHornsounder /> as
                    it empowers surrounding mobs.
                </Tip>
                <Rupt>
                    <NpcNokhudLancemaster /> have the most health, and cleave with <SpellCleavingStrikes />.
                    Never stay in front of the tank. Followed by <SpellWarStomp />, run out of melee to avoid stun.
                    <SpellDisruptiveShout /> must be rupted because it prevents spellcasting for 6 seconds,
                    with AoE physical damage.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Granyth</BossTitle>

            <p>
                Upon reaching 100 Energy, takes 27 seconds to cast <SpellEruption />.
                Use the <SpellDragonkillerLance /> before the high AoE damage wipes the team.
            </p>

            <Tips>
                <Tip>
                    There are 3 <SpellDragonkillerLance />.
                </Tip>
                <Tip>
                    Boss randomly activates one few seconds before casting <SpellEruption />.
                </Tip>
                <Tip>
                    Cannot be shot before activated.
                </Tip>
                <Tip>
                    Only wait to prevent wipes from <SpellEruption />.
                </Tip>
                <Tip>
                    Stuns the boss for 5 secondes and removes 5% health.
                </Tip>
            </Tips>

            <Tips>
                <Tip>
                    Run away from <SpellTectonicStomp />, knocking away with massive damage.
                </Tip>
                <Tip>
                    Kill <NpcNokhudSaboteur /> to prevent <SpellDismantle />.
                    Stun, Disruption, Knockback, Slow, and Immobilize work.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Move boss closer to Saboteur for cleave.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Watch for <SpellShardsofStone />, unavoidable damage.
                </Healer>
                <Healer>
                    Save healing cooldowns if <SpellEruption /> goes through.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before The Raging Tempest</SectionTitle>

            <p>
                Boss is immune until the 4
                <Npc id={123}>Stormsurge Totem</Npc>
                s are broken.
            </p>

            <Tips>
                <Tip>
                    <NpcStormcallerBoroo />, <NpcStormcallerArynga />, <NpcStormcallerZarii /> are identical,
                    spread accross the 4 packs. <SpellTotemicOverload /> deals unavoidable AoE damage around the totem.
                </Tip>
                <Rupt>
                    <NpcPrimalistStormspeaker /> = most dangerous caster.
                    Use spare rupts for <Spell id={386012}>Stormbolt</Spell>.
                    ALWAYS rupt <SpellTempest />, deals massive AoE damage, plus damage-over-time (can be dispelled).
                </Rupt>
                <Tip>
                    <NpcPrimalistThunderbeast /> casts <SpellChainLightning /> on random player,
                    stay out of range from others so the spell does not bounce.
                    Run out of <SpellThunderClap /> if you are melee.
                </Tip>
                <Tip>
                    Purge the effect of <SpellStormshield /> from <NpcPrimalStormshield />.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>The Raging Tempest</BossTitle>

            <p>
                Energy bar is initially 50, takes 30 seconds until entering <SpellElectricalStorm /> &quot;phase&quot;,
                easier to deal with if you use personal defensives combined with healer&apos;s cooldowns.
                Cycle repeats.
            </p>

            <Tips>
                <Tip>
                    Periodically, everyone gets a <SpellLightningStrike />. Spread out not to clip each other.
                </Tip>
                <Tip>
                    Collect orbs <SpellUncontrollableEnergy /> grants 5% increased damage and healing for 15 seconds.
                    Stacks. Consuming orbs deal damage. Let DPS have more to speed up the fight.
                </Tip>
                <Tip>
                    Do not stay under boss to avoid <SpellTheRagingTempest /> ability. <NpcTheRagingTempest /> has a
                    big melee range so stay few feet away.
                </Tip>
                <Tip>
                    <SpellLightningStrike /> causes <SpellElectricalOverload />,
                    destroying strucked orbs of <SpellUncontrollableEnergy />.
                    Collect them or make sure not to cleave them.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    If you collect <SpellUncontrollableEnergy />, care for <SpellWindBurst />.
                    Stay in melee range to avoid it.
                </Tank>
                <Tank>
                    Beware of <SpellEnergySurge /> hits, use mitigation.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    When <SpellElectricalStorm /> is active, have cooldowns to cover AoE damage in the next 15 seconds.
                </Healer>
                <Healer>
                    Dispell buff from <SpellEnergySurge /> asap.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Teera and Maruuk</SectionTitle>

            <p>
                First, defeatu 4 Soulharvesters (<NpcSoulharvesterDuuren /> <NpcSoulharvesterGaltmaa />,
                <NpcSoulharvesterTumen />, and <NpcSoulharvesterMandakh />) in 4 packs. They are the same.
            </p>

            <Tips>
                <Rupt>
                    Interrupt <SpellDeathBoltVolley /> at all cost. Massive Shadow damage to everyone.
                    <SpellShatterSoul /> targets 3 random players, reducing damage by 30% until they collect a soul
                    or duration expires. <SpellHarvestSoul /> harvests souls of dead allies,
                    gaining <SpellConsumedSoul />, increasing damage. Kill them first.
                </Rupt>
                <Tip>
                    <NpcUkhelDeathspeaker /> casts <SpellGraspoftheDead />, cursing 2 random players, rooting and
                    dealing damage. When it casts <SpellChantoftheDead />, stay out of range. Buffs Undead enemies.
                    If it goes through on nearby mobs, use Enrage Dispel to remove the Enrage effect.
                </Tip>
                <Tip>
                    <NpcUkhelBeastcaller /> casts <SpellDevourSpirit />, gaining <SpellSoulInfusedWeapon />.
                    Does heavy tank damage with <SpellHeavySlash />.
                    Calls reinforcements with <SpellDesecratingRoar />, can only be stopped with Stun or Disruption.
                </Tip>
                <Tip>
                    Avoid <SpellNecroticEruption /> from <NpcUkhelCorruptor />
                </Tip>
                <Rupt>
                    Rupt <SpellDominate /> from <NpcUkhelWillcrusher />. Makes you mind-controlled and attack allies
                    for 6 seconds. Shaman&apos;s <SpellTremorTotem /> neutralizes the effect, pre-place the totem.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Teera and Maruuk</BossTitle>

            <p>
                They share health with <SpellLifeLink />, tank them together for cleave.
                <NpcTeera /> starts at 50 energy and <NpcMaruuk /> 0. At 100, <NpcTeera /> casts <SpellGaleArrow />
                and <NpcMaruuk /> casts <SpellEarthsplitter />.
            </p>

            <Tips>
                <Tip>
                    Run away from <SpellFrightfulRoar />. Fear-immune effects work.
                </Tip>
                <Tip>
                    Place <SpellGaleArrow /> away from boss, for less ground effects. Cast on 4 party members.
                </Tip>
                <Rupt>
                    Care for pushback of <SpellGuardianWind />. Interruptible.
                </Rupt>
                <Tip>
                    Dodge <NpcMaruuk />&apos;s <SpellEarthsplitter /> at all costs.
                    If you&apos;re bad, damage is physical so immunities work.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Tank them together for <SpellLifeLink /> for cleave.
                </Tank>
                <Tank>
                    If they&apos;re more than 20 yards away, <SpellAncestralBond /> buffs them, increasing damage by
                    5% for every 1 sec spent apart.
                </Tank>
                <Tank>
                    When <NpcTeera /> casts <SpellSpiritLeap />, move to her for better boss stacking.
                </Tank>
                <Tank>
                    Use active mitigation upon <SpellBrutalize />.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Watch out for <NpcTeera />&apos;s <SpellQuickShot />, unavoidable damage to a random player.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Balakar Khan</SectionTitle>

            <p>
                Unlocks at the end. Aera dismounts you from dragons. Trash can be skipped.
            </p>

            <Tips>
                <Tip>
                    <SpellSwiftStab /> from <NpcNokhudWarspear /> charges on random player and leaves bleed effect.
                </Tip>
                <Tip>
                    <NpcNokhudStormcaller /> = most dangerous caster because of <SpellStormShock /> hitting at random.
                    Leaves lingering damage-over-time, use personal defensive if you get two consecutive ones.
                </Tip>
                <Rupt>
                    Beware of <NpcNokhudonHoundsman />&apos;s <SpellShoot />, unavoidable damage to random player.
                    Use Stun or Disruption to stop <SpellCommandSeek />.
                </Rupt>
            </Tips>

            <p>
                2 avoidable mini-bosses: <NpcBatak /> and <NpcBalara />. Kill them simultaneously to avoid
                <SpellRagingKin />.
            </p>

            <Tips>
                <Tip>
                    Avoid <NpcBalara />&apos;s <SpellRavagingSpear />, might be lethal.
                </Tip>
                <Tip>
                    Dodge <SpellBroadStomp /> from <NpcBatak />, 20 yard range.
                </Tip>
                <Tip>
                    Care for <SpellVehementCharge /> from <NpcBalara />, knocks back and deal damage.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Balakar Khan</BossTitle>

            <p>
                2-phase boss. Intermission with minions.
            </p>

            <Tips>
                <Tip>
                    <NpcBalakarKhan /> casts <SpellIronSpear /> on random player, followed by immediate charge to
                    collect the spear with <SpellIronStampede />. Bait the charge near a wall.
                </Tip>
                <Tip>
                    Dodge <SpellUpheaval /> <SpellCracklingUpheaval /> at all cost. Drops to critical health.
                    Followed up by <SpellQuake />, lingering AoE pool on the ground dealing damage.
                </Tip>
                <Rupt>
                    Interrupt <SpellStormBolt /> from <NpcNokhudStormcaster /> during Intermission,
                    for better stacking and enable cleaving, speeding up the phase.
                </Rupt>
                <Tip>
                    Dodge <SpellLightning /> on the ground during Intermission.
                </Tip>
                <Tip>
                    <NpcBalakarKhan /> casts <SpellStaticSpear /> on random player, pulling the player to its location.
                    Short time to react and get away to avoid the <SpellIronStampede />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    <SpellRendingStrike /> leaves a nasty bleed effect and increases damage from <SpellSavageStrike />
                    by 500%. Use active mitigation or defensives.
                </Tank>
                <Tank>
                    Stack <NpcNokhudStormcaster /> during Intermission for cleave.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    DUring Intermission, <SpellStormwinds /> damages everyone. Kill <NpcNokhudStormcaster /> asap.
                    Use healing cooldowns.
                </Healer>
                <Healer>
                    Dispell effect from <SpellConductiveStrike /> asap. Very important!
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default RubyLifePools;
