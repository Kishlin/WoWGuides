import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Dungeon from '../../src/WoWGuides/Dungeons/Components/Dungeon';
import Layout from '../../src/Shared/Layout/Component/Layout';
import GettingThere from '../../src/WoWGuides/GettingThere/Components/GettingThere';
import CheckpointsList from '../../src/WoWGuides/Checkpoints/Components/CheckpointsList';
import Checkpoint from '../../src/WoWGuides/Checkpoints/Components/Checkpoint';
import Npc from '../../src/WoWGuides/Tags/Components/Npc';
import Section from '../../src/WoWGuides/Section/Components/Section';
import SectionTitle from '../../src/WoWGuides/Section/Components/SectionTitle';
import Tips from '../../src/WoWGuides/Tips/Components/Tips';
import Tip from '../../src/WoWGuides/Tips/Components/Tip';
import Spell from '../../src/WoWGuides/Tags/Components/Spell';
import Rupt from '../../src/WoWGuides/Tips/Components/Rupt';
import BossSection from '../../src/WoWGuides/Section/Components/BossSection';
import BossTitle from '../../src/WoWGuides/Section/Components/BossTitle';
import TankTips from '../../src/WoWGuides/Tips/Components/TankTips';
import Tank from '../../src/WoWGuides/Tips/Components/Tank';
import HealerTips from '../../src/WoWGuides/Tips/Components/HealerTips';
import Healer from '../../src/WoWGuides/Tips/Components/Healer';

const RubyLifePools: FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Ruby Life Pools</title>
        </Head>

        <Dungeon>Ruby Life Pools</Dungeon>

        <GettingThere>Fly to The Waking Shore. South East.</GettingThere>

        <CheckpointsList>
            <Checkpoint>
                <span>After first boss, </span>
                <Npc id={188252}>Melidrusa Chillworn</Npc>
                <span>. Use the </span>
                <Npc id={194667}>Radiant Drake</Npc>
                <span> to fly upwards.</span>
            </Checkpoint>
        </CheckpointsList>

        <Section>
            <SectionTitle>Trash before Melidrussa Chillworn</SectionTitle>

            <Tips>
                <Tip>
                    <Npc id={188244}>Primal Juggernaut</Npc>
                    <span>&apos;s cast is lethal.</span>
                </Tip>
                <Tip>
                    <Npc id={188011}>Primal Terrasentry</Npc>
                    <span>&apos;s </span>
                    <Spell id={371956}>Stone Missile</Spell>
                    <span> ground animation knocks away with massive damage.</span>
                </Tip>
                <Rupt>
                    <Npc id={188067}>Flashfrost Chillweaver</Npc>
                    <span>&apos;s </span>
                    <Spell id={371984}>Icebolt</Spell>
                    <span>. Also channels </span>
                    <Spell id={372749}>Ice Shield</Spell>
                    <span> which immunes against crowd-control.</span>
                </Rupt>
                <Tip>
                    <span>Walking on Dragon Eggs spawns </span>
                    <Npc id={187894}>Infused Whelps</Npc>
                    <span>, applying </span>
                    <Spell id={372682}>Primal Chill</Spell>
                    <span> stacks, dealing damage and slowing you down. </span>
                    <span>Reaching 8 stacks freezes you.</span>
                </Tip>
            </Tips>

            <p>
                <span>First &quot;mini-boss&quot; at the end of The Infusion Chambers just before </span>
                <Npc id={188252}>Melidrusa Chillworn</Npc>
                <span>. </span>
                <Npc id={187897}>Defier Draghar</Npc>
                <span>.</span>
            </p>

            <Tips>
                <Tip>
                    <Spell id={372047}>Steel Barrage</Spell>
                    <span> is a tank-buster, use mitigation. </span>
                    <span>Ticks spawn a Motel Steel fragment on the ground, dealing damage upon contact.</span>
                </Tip>
                <Tip>
                    <Spell id={372087}>Blazing Rush</Spell>
                    <span> = deadly charge targeting a random player, leaving a bleeding effect.</span>
                    <span> Stack against the wall to bait the charge, and increase uptime for melee dps.</span>
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Melidrussa Chillworn</BossTitle>

            <Tips>
                <Tip>
                    <span>Periodically spawns </span>
                    <Spell id={396044}>Hailbombs</Spell>
                    <span> on everyone, leaving blocks of ice on the ground.</span>
                    <span> Stays permanently and deals massive damage.</span>
                    <span> Bait them close to each other to save space around the room.</span>
                </Tip>
                <Tip>
                    <span>Occasionally targets someone with </span>
                    <Spell id={372851}>Chillstorm</Spell>
                    <span>, dealing damage to the party and exploding at end of cast.</span>
                    <span> Move out from the center. Pushes out so careful not to hit </span>
                    <Spell id={396044}>Hailbombs</Spell>
                    <span> fragments on the ground.</span>
                </Tip>
                <Tip>
                    <span>When boss casts </span>
                    <Spell id={373046}>Awaken Whelps</Spell>
                    <span>, deal AoE damage on them. When the cast is finished, boss goes into </span>
                    <Spell id={373680}>Frost Overload</Spell>
                    <span>, pulsating damage to everyone until the </span>
                    <Spell id={372988}>Ice Bulwark</Spell>
                    <span> is broken to interrupt her.</span>
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    <Spell id={372808}>Frigid Shard</Spell>
                    <span> casts are quick and non-interruptible.</span>
                </Tank>
                <Tank>
                    <span>Gather threat on </span>
                    <Npc id={187894}>Infused Whelp</Npc>
                    <span>s asap and stack them on </span>
                    <Npc id={188252}>Melidrusa Chillworn</Npc>
                    <span> for cleave.</span>
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    <span>Use healing cooldowns during </span>
                    <Spell id={372851}>Chillstorm</Spell>
                    <span>. Team takes damage during it and</span>
                    <span> the explosion deals high damage.</span>
                </Healer>
                <Healer>
                    <span>Use healing cooldowns to cover </span>
                    <Spell id={373680}>Frost Overload</Spell>
                    <span>.</span>
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash before Kohia Blazehoof</SectionTitle>

            <p>
                <span>Hop on a </span>
                <Npc id={194667}>Radiant Drakes</Npc>
                <span>, carying you to the Ruby Overlook.</span>
            </p>

            <p>
                <span>2 mini-bosses: </span>
                <Npc id={197698}>Thunderhead</Npc>
                <span>  to the left after landing. </span>
                <Npc id={197697}>Flamegullet</Npc>
                <span>  to the right after landing.</span>
            </p>

            <Tips>
                <Tip>
                    <Npc id={197698}>Thunderhead</Npc>
                    <span> is harder. Dodge the frontal </span>
                    <Spell id={391726}>Storm Breath</Spell>
                    <span>. Few ticks will kill you.</span>
                </Tip>
                <Tip>
                    <Spell id={392395}>Thunder Jaw</Spell>
                    <span> = tank buster, always on the tank.</span>
                    <span> High damage and knocking back.</span>
                </Tip>
                <Tip>
                    <Spell id={392640}>Rolling Thunder</Spell>
                    <span> applies to 2 players. Massive damage</span>
                    <span> to all players within range.</span>
                    <span> Dispelling deals the full damage. Strat is to dispel</span>
                    <span> first stack and waiting for the other to proc.</span>
                </Tip>
            </Tips>

            <Tips>
                <Tip>
                    <Npc id={197697}>Flamegullet</Npc>
                    <span> is easier. Dodge the frontal </span>
                    <Spell id={391723}>Flame Breath</Spell>
                    <span>.</span>
                </Tip>
                <Tip>
                    <Spell id={392394}>Fire Maw</Spell>
                    <span> = tank buster, massive damage then damage-over-time</span>
                    <span> Fire effect.</span>
                </Tip>
                <Tip>
                    <span>When under 50%, casts </span>
                    <Spell id={392569}>Molten Blood</Spell>
                    <span>. Massive damage within range. Cannot be dispelled.</span>
                    <span> Increasing damages every tick. Delay damage cooldowns </span>
                    <span> to nuke it faster during burn phase. </span>
                </Tip>
            </Tips>

            <p>
                <span>Defeat 4 </span>
                <Npc id={190034}>Blaezbound Destroyers</Npc>
                <span> supported by another type of non-boss-enemy.</span>
            </p>

            <Tips>
                <Tip>
                    <Npc id={190034}>Blaezbound Destroyers</Npc>
                    <span>: care for </span>
                    <Spell id={373693}>Living Bomb</Spell>
                    <span>. Casted on random player, ticking damage, </span>
                    <span>explodes upon expiring, damaging nearby mobs.</span>
                    <span> Also casts </span>
                    <Spell id={384823}>Inferno</Spell>
                    <span>, unavoidable AoE damage within range, plus </span>
                    <span>damage-over-time. When defeated, casts </span>
                    <Spell id={373087}>Burnout</Spell>
                    <span>, move out of melee to avoir lethal damage.</span>
                </Tip>
                <Rupt>
                    <Npc id={190207}>Primalist Cinderweaver</Npc>
                    <span>&apos;s </span>
                    <Spell id={384194}>Cinderbolt</Spell>
                    <span> target a random player. When casting </span>
                    <Spell id={385063}>Burning Ambition</Spell>
                    <span>, takes more damage but increases hast.</span>
                    <span> Don&apos;t purge buff to speed up kill.</span>
                </Rupt>
                <Rupt>
                    <Spell id={385536}>Flame Dance</Spell>
                    <span> from </span>
                    <Npc id={190206}>Primalist Flamedancer</Npc>
                    <span> can&apos;t be interrupt, but Stun or Disruption work.</span>
                </Rupt>
                <Tip>
                    <Npc id={194622}>Scorchling</Npc>
                    <span> are weak and can be packed. </span>
                    <Spell id={373869}>Burning Touch</Spell>
                    <span> goes on highest threat target (tank).</span>
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Kokia Blazehoof</BossTitle>

            <Tips>
                <Tip>
                    <span>Avoid initial hit of </span>
                    <Spell id={372863}>Ritual of Blazebinding</Spell>
                    <span>. Based on location, so stack together.</span>
                </Tip>
                <Tip>
                    <span>Switch immediately to </span>
                    <Npc id={189886}>Blazebound Firestorm</Npc>
                    <span> when it spawns.</span>
                </Tip>
                <Rupt>
                    <Npc id={189886}>Blazebound Firestorm</Npc>
                    <span>&apos;s </span>
                    <Spell id={373017}>Roaring Blaze</Spell>
                </Rupt>
                <Tip>
                    <span>Once you defaet </span>
                    <Npc id={189886}>Blazebound Firestorm</Npc>
                    <span> run away from </span>
                    <Spell id={373087}>Burnout</Spell>
                    <span>. Also leaves a permanent </span>
                    <Spell id={372820}>Scorched Earth</Spell>
                    <span> on the ground, care for space.</span>
                </Tip>
                <Tip>
                    <span>Sidestep </span>
                    <Spell id={372107}>Molten Boulder</Spell>
                    <span>, dealing massive damage and stuning for 3 seconds.</span>
                    <span> Will also leave </span>
                    <Spell id={372820}>Scorched Earth</Spell>
                    <span> so care where you bait it.</span>
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    <span>Bring </span>
                    <Npc id={189232}>Kokia Blazehoof</Npc>
                    <span> close to </span>
                    <Npc id={189886}>Blazebound Firestorm</Npc>
                    <span> for cleave.</span>
                </Tank>
                <Tank>
                    <span>Use mitigation against </span>
                    <Spell id={372858}>Searing Blows</Spell>
                    <span>. Plus, there is a blood effect after it.</span>
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    <span>Use healing cooldowns against </span>
                    <Spell id={384823}>Infero</Spell>
                    <span>, dealing unavoidable AoE damage to everyone.</span>
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Kyrakka and Erkhart Stormvein</SectionTitle>

            <p><span>Head down the stairs.</span></p>

            <Tips>
                <Tip>
                    <Npc id={197982}>Storm warrior</Npc>
                    <span>s cast </span>
                    <Spell id={392406}>Thunderclap</Spell>
                    <span>, damaging all in range and reducing haste </span>
                    <span>and movespeed.</span>
                </Tip>
                <Tip>
                    <span>Use a Purge on </span>
                    <Npc id={197509}>Primal Thundercloud</Npc>
                    <span>&apos;s </span>
                    <Spell id={391031}>Tempest Barrier</Spell>
                    <span> to speed up killing them.</span>
                </Tip>
                <Rupt>
                    <span>Use defensives when </span>
                    <Npc id={198047}>Tempest Channeler</Npc>
                    <span> is casting </span>
                    <Spell id={392488}>Lightning Storm</Spell>
                    <span>. Interrupt </span>
                    <Spell id={390449}>Thunderbolt</Spell>
                    <span> and care when she spawns </span>
                    <Spell id={392574}>Summon Primal Thundercloud</Spell>
                    <span>.</span>
                </Rupt>
                <Rupt>
                    <Npc id={197985}>Flame Channeler</Npc>
                    <span>&apos;s </span>
                    <Spell id={392451}>Flashfire</Spell>
                    <span>, dealing damage to a random player and healing the </span>
                    <span>Channeler. You can choose to ignore </span>
                    <Spell id={392454}>Burning Veins</Spell>
                    <span>, making them take more damage and increasing their haste.</span>
                </Rupt>
            </Tips>

            <p>
                <span>Defeat </span>
                <Npc id={197535}>High Channeler Ryvati</Npc>
                <span>to spawn </span>
                <Npc id={193435}>Kyrakka</Npc>
                <span> and </span>
                <Npc id={190485}>Erkhart Stormvein</Npc>
                <span>.</span>
            </p>

            <Tips>
                <Rupt>
                    <Spell id={392924}>Shock Blast</Spell>
                    <span>, dealing high damage plus lingering damage-over-time.</span>
                </Rupt>
                <Tip>
                    <span>Use defensives when </span>
                    <Npc id={197535}>High Channeler Ryvati</Npc>
                    <span> is casting </span>
                    <Spell id={392488}>Lightning Storm</Spell>
                    <span>.</span>
                </Tip>
                <Tip>
                    <span>Break </span>
                    <Spell id={391050}>Tempest Stormshield</Spell>
                    <span> asap.</span>
                </Tip>
                <Tank>
                    <span>Gain threat on </span>
                    <Npc id={197509}>Primal Thundercloud</Npc>
                    <span> asap when spawned with </span>
                    <Spell id={392574}>Summon Primal Thundercloud</Spell>
                    <span>.</span>
                </Tank>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Kyrakka and Erkhart Stormvein</BossTitle>

            <p>
                <span>Fight </span>
                <Npc id={190485}>Erkhart Stormvein</Npc>
                <span> first, but at 50% </span>
                <Npc id={193435}>Kyrakka</Npc>
                <span> will join.</span>
            </p>

            <Tips>
                <Tip>
                    <span>Dodge </span>
                    <Spell id={381525}>Roaring Firebreath</Spell>
                    <span> from </span>
                    <Npc id={193435}>Kyrakka</Npc>
                    <span>, failing to will apply </span>
                    <Spell id={381862}>Infernocore</Spell>
                    <span> which, when expriing, will leave </span>
                    <Spell id={384773}>Flaming Embers</Spell>
                    <span> fire pools on the ground. </span>
                    <span>Embers re-apply Infernocore to targets.</span>
                </Tip>
                <Tip>
                    <Npc id={190485}>Erkhart Stormvein</Npc>
                    <span> periodically casts </span>
                    <Spell id={381516}>Interrupting Cloudburst</Spell>
                    <span>, massive torrent interrupting casts and locking you </span>
                    <span>for 4 seconds.</span>
                </Tip>
                <Tip>
                    <Npc id={190485}>Erkhart Stormvein</Npc>
                    <span>&apos;s </span>
                    <Spell id={381517}>Winds of Change</Spell>
                    <span> deal AoE damage to everyone and pushes back. Also moving </span>
                    <Spell id={384773}>Flaming Embers</Spell>
                    <span>, applying </span>
                    <Spell id={381862}>Infernocore</Spell>
                    <span> on contact.</span>
                </Tip>
                <Tip>
                    <span>During phase 1, </span>
                    <Npc id={193435}>Kyrakka</Npc>
                    <span> randomly casts </span>
                    <Spell id={381607}>Flamespit</Spell>
                    <span> on a player.</span>
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    <span>Once </span>
                    <Npc id={193435}>Kyrakka</Npc>
                    <span> casts </span>
                    <Spell id={381525}>Roaring Firebreath</Spell>
                    <span>, move </span>
                    <Npc id={190485}>Erkhart Stormvein</Npc>
                    <span> closer for cleave.</span>
                </Tank>
                <Tank>
                    <span>Beware of </span>
                    <Spell id={381512}>Stormslam</Spell>
                    <span> frontal, massive damage plus debuff increasing</span>
                    <span> nature damage, dispellable.</span>
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    <span>Top up players who have </span>
                    <Spell id={381862}>Infernocore</Spell>
                    <span>.</span>
                </Healer>
                <Healer>
                    <span>Dispel tank&apos;s debuff from </span>
                    <Spell id={381512}>Stormslam</Spell>
                    <span>.</span>
                </Healer>
                <Healer>
                    <span>Top up players targetted by </span>
                    <Spell id={381607}>Flamespit</Spell>
                    <span> as it applies </span>
                    <Spell id={381862}>Infernocore</Spell>
                    <span>.</span>
                </Healer>
                <Healer>
                    <span>In phase 2, use healing cooldowns on </span>
                    <Spell id={381607}>Flamespit</Spell>
                    <span> as it targets everyone and apply </span>
                    <Spell id={381862}>Infernocore</Spell>
                    <span>.</span>
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default RubyLifePools;
