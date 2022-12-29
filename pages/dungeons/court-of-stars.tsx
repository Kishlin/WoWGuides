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
import SpellQuellingStrike from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellQuellingStrike';
import SpellFortification from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellFortification';
import SpellWildDetonation from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellWildDetonation';
import SpellSuppress from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellSuppress';
import SpellChargingStation from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellChargingStation';
import SpellSoundAlarm from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellSoundAlarm';
import SpellChargedBlast from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellChargedBlast';
import SpellManaFang from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellManaFang';
import SpellResonantSlash from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellResonantSlash';
import SpellArcaneLockdown from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellArcaneLockdown';
import SpellHinder from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellHinder';
import SpellDriftingEmbers from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellDriftingEmbers';
import SpellEyeStorm from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellEyeStorm';
import SpellBewitch from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellBewitch';
import SpellShadowSlash from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellShadowSlash';
import SpellFelblazeLeap from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellFelblazeLeap';
import SpellFelDetonation from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellFelDetonation';
import SpellBondofCunning from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellBondofCunning';
import SpellDisintegrationBeam from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellDisintegrationBeam';
import SpellImpendingDoom from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellImpendingDoom';
import SpellWhirlingBlades from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellWhirlingBlades';
import SpellScreamofPain from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellScreamofPain';
import SpellShockwave from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellShockwave';
import SpellCrushingLeap from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellCrushingLeap';
import SpellWitheringSoul from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellWitheringSoul';
import SpellInfernalEruption from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellInfernalEruption';
import SpellBurningIntensity from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellBurningIntensity';
import SpellSpectralSight from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellSpectralSight';
import SpellShadowBoltVolley from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellShadowBoltVolley';
import SpellVampiricClaws from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellVampiricClaws';
import SpellHypnosisBat from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellHypnosisBat';
import SpellBladeSurge from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellBladeSurge';
import SpellPiercingGale from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellPiercingGale';
import SpellSlicingMaelstrom from '../../src/WoWGuides/Dungeons/CourtOfStars/Spells/SpellSlicingMaelstrom';
import CenteredImage from '../../src/Shared/Images/Components/CenteredImage';

const CourtOfStars: FunctionComponent = () => (
    <Layout>
        <Dungeon>Court of Stars</Dungeon>

        <GettingThere>South coast of Suramar, Broken Isles.</GettingThere>

        <Section>
            <SectionTitle>Unique Profession/Class Bonuses</SectionTitle>

            <Tips>
                <Tip>
                    Healers and Tailors can use Wounded Nightborne Civilian. Summons a miniboss which will reduce the
                    number of Felbound Enforcers to kill around Talixae Flamewreath.
                </Tip>
                <Tip>
                    Rogue, Warrior, and Leatherworkers, can use Bazaar Goods. Summons a miniboss all the same.
                </Tip>
                <Tip>
                    Gnomes, Goblins, Engineers can use Arcane Power Conduit, debuffing Guardian Constructs, stunning
                    them for 5 sec every 20 seconds.
                </Tip>
                <Tip>
                    Rogues and Alchemists can use Flask of the Solemn Night. Skips last phase of Patrol Captain Gerdo.
                </Tip>
                <Tip>
                    Shamans, Skinners, Inscriptionists can use Waterlogged Scroll, granting everyone 35% movespeed.
                </Tip>
                <Tip>
                    Druids and Herbalists can use Umbral Bloom, granting everyone 10% Haste.
                </Tip>
                <Tip>
                    Death Knights and monks can use Starlight Rose Brew, granting improved health and mana regen.
                </Tip>
                <Tip>
                    Miners and Jewelcrafters can use Lifesized Nightborne Statue, summoning a miniboss, reducing
                    number of Felbound Enforcers to kill around Talixae Flamewreath.
                </Tip>
                <Tip>
                    Pandaren, Cooks, and Herbalists can use Nightshade Refreshments, granting 10% increased health.
                </Tip>
                <Tip>
                    Hunters and Blacksmiths can use Discarded Junk, summoning a miniboss at Talixae Flamewreath,
                    spawning an armed trap. Walking over it deals 10% health damage and increase damage taken by 25%
                    for 30 seconds.
                </Tip>
                <Tip>
                    Mages, Blood Elfs / Night Elfs, and Enchanters can use Magical Lantern, granting 10% increased
                    damage.
                </Tip>
                <Tip>
                    Demon Hunters, Paladins, Priests, and Warlocks can use Fel Orb, granting 10% increased Critical
                    Strike chance bonus.
                </Tip>
                <Tip>
                    Demon Hunters, Paladins, and Priests can use Internal Tome, granting 10% damage reduction bonus.
                </Tip>
            </Tips>

            <CenteredImage
                width={750}
                height={500}
                alt="bonuses"
                src="https://static.icy-veins.com/images/wow/dragonflight/dungeons/court-of-stars/profession-locations.jpg"
            />
        </Section>

        <Section>
            <SectionTitle>Trash Before Patrol Captain Gerdo</SectionTitle>

            <p>Disable Signaling Beacons to make the fight easier. There are 5 in total.</p>

            <Tips>
                <Tip>
                    Watch out Duskwatch Guard&apos;s <SpellQuellingStrike /> frontal (always on tank). Use Purge or
                    Dispel against <SpellFortification />, reducing damage taken by 25% and increasing Haste by 25%.
                </Tip>
                <Tip>
                    Step away from Mana Wyrm once they reach cricital health levels. When dying, they cast
                    <SpellWildDetonation />, avoid at all costs.
                </Tip>
                <Rupt>
                    Guardian Constructs = toughest mob. Always rupt <SpellSuppress /> silence channel cast.
                    <SpellChargingStation />, if not interrupted, will heal and increase damage of nerarby mob.
                    Highest priority target!
                </Rupt>
                <Tip>
                    Stop Duskwatch Sentry once they run towards nearby Signaling Beacon. If they <SpellSoundAlarm />,
                    they will spawn trash mobs that give no count. Stuns are a great way.
                </Tip>
                <Tip>Sidestep the <SpellChargedBlast /> from Bound Energy.</Tip>
                <Tip>Mana Saber will always cast <SpellManaFang /> on furthest enemy. Use personal defensives.</Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Patrol Captain Gerdo</BossTitle>

            <p>
                Rogue and Alchemists should interact with Flask of the Solemn Night to poison it. Boss will die
                instead of empowering itself at 25%.
            </p>

            <Tips>
                <Tip>
                    Avoid the <SpellResonantSlash /> frontal-cone.
                </Tip>
                <Tip>During <SpellArcaneLockdown />, jump 3 times to remove the 3 stacks. Dispells work.</Tip>
                <Tip>Boss cannot summon Vigilant Duskwatcher if all Signaling Beacons were de-activated.</Tip>
            </Tips>

            <TankTips>
                <Tank>If Vigilant Duskwatchers spawn, take aggro and stack them close to the boss for cleave.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Dispel the <SpellArcaneLockdown />.</Healer>
                <Healer>If there are Vigilant Duskwatcher, watch out for <SpellHinder />. Dispell the stun.</Healer>
                <Healer>If there are no Roght or Alchemist, use healing cooldowns during Enrage.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Talixae Flamewreath</SectionTitle>

            <Tips>
                <Tip>
                    Do not underestimate Blazing Imps&apos; <SpellDriftingEmbers />. Use mass Stuns.
                </Tip>
                <Tip>
                    Use defensives when Watchful Inquisitors cast <SpellEyeStorm />. High damage alert.
                </Tip>
                <Rupt>
                    Interrupt <SpellBewitch /> from Shadow Mistress. Tank must pay attention to <SpellShadowSlash />.
                </Rupt>
                <Tip>Beware of Legion Haound and their <SpellFelblazeLeap />, on random targets.</Tip>
                <Tip>
                    Felbound Enforcers only have <SpellFelDetonation />, which you can LoS to avoid massive damages.
                </Tip>
            </Tips>

            <p>
                Defeat the 3 minibosses. Each will grand <SpellBondofCunning /> aura, making boss significantly harder.
            </p>

            <p>
                Baalgar the Watchful: Kick <SpellDisintegrationBeam />. Healer should care for <SpellImpendingDoom />,
                going on 2 random players, and upon dispelled, triggering an AoE explosion.
            </p>

            <p>
                Imacu&apos;tya: annoying for melee, run out when she casts <SpellWhirlingBlades />. Rupt
                <SpellScreamofPain />, which would damage everyone in party.
            </p>

            <p>
                Jazsharlu has lethal frontal <SpellShockwave /> that stuns, and <SpellCrushingLeap /> targeting a
                random player and dealing damage.
            </p>
        </Section>

        <BossSection>
            <BossTitle>Talixae Flamewreath</BossTitle>

            <Tips>
                <Rupt>Interrupt all <SpellWitheringSoul /> casts.</Rupt>
                <Tip>Stack together for <SpellInfernalEruption />, but do not get hit by the initial damage.</Tip>
                <Tip>Focus on Interfnal Imps as soon as they spawn from <SpellInfernalEruption />.</Tip>
            </Tips>

            <TankTips>
                <Tank>Stack all Infernal Imps on top of Talixae Flamewreath.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Top up party when Talixae Flamewreath is casting <SpellBurningIntensity />.
                </Healer>
                <Healer>
                    You can dispel <SpellWitheringSoul /> if it goes through.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Advisor Melandrus</SectionTitle>

            <p>
                Talk to NPC to disguise. Each Chatty Rumormonger will have a chance to give a clue,
                with a maximum of 5. When finding the spy, NPC will flee into one of the corridors and Gerenth the Vile
                will appear. Defeat Gerenth the Vile to open the door.
            </p>

            <p>You can use Demon Hunter&apos;s <SpellSpectralSight /> to find out the spy.</p>

            <Tips>
                <Tip><SpellShadowBoltVolley /> is unavoidable AoE every couple of seconds.</Tip>
                <Tank>Tank beware with <SpellVampiricClaws />, serious initial damage and heal Gerenth.</Tank>
                <Rupt>Use Stun on <SpellHypnosisBat />, or targetted person will be charmed and turn hostile.</Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Advisor Melandrus</BossTitle>

            <Tips>
                <Tip>
                    <SpellBladeSurge /> is cast on furthest player, serious initial damage and ticking Bleed effect.
                    Bait it on a good spot. After charge, boss will leave an Image of Advisor Melandrus.
                </Tip>
                <Tip>
                    Avoid the rotating <SpellPiercingGale /> on the ground. Appear where Advisor Melandrus begins
                    <SpellBladeSurge />.
                </Tip>
                <Tip>
                    Avoid <SpellPiercingGale /> ground animation. Remember any Images of Advisor Melandrus will copy
                    his ability when cast.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Continuously relocate boss to avoid nearby Images of Advisor Melandrus and their
                    <SpellPiercingGale />s.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Use healing cooldowns for <SpellSlicingMaelstrom />.
                    Images of Advisor Melandrus will also copy this.
                </Healer>
            </HealerTips>
        </BossSection>














    </Layout>
);

export default CourtOfStars;
