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
import SpellShadowMend from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellShadowMend';
import SpellShadowBolt from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellShadowBolt';
import SpellVoidSlash from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidSlash';
import SpellVoidPulse from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidPulse';
import SpellVoidEruptions from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidEruptions';
import SpellCryofAnguish from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellCryofAnguish';
import SpellSinisterFocus from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellSinisterFocus';
import SpellDaggerfall from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDaggerfall';
import SpellWhispersoftheDarkStar
    from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellWhispersoftheDarkStar';
import SpellDarkCommunion from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDarkCommunion';
import SpellDarkEclipse from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDarkEclipse';
import SpellLunarPurity from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellLunarPurity';
import SpellDeathspike from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDeathspike';
import SpellDomination from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDomination';
import SpellTremorTotem from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellTremorTotem';
import SpellRendingVoidlash from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellRendingVoidlash';
import SpellVoidBolt from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidBolt';
import SpellDeathBlast from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellDeathBlast';
import SpellPlanarShift from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellPlanarShift';
import SpellVoidVortex from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidVortex';
import SpellSoulSteal from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellSoulSteal';
import SpellReturnedSoul from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellReturnedSoul';
import SpellSoulShred from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellSoulShred';
import SpellVoidDevastation from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidDevastation';
import SpellVoidBlast from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellVoidBlast';
import SpellNecroticBurst from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellNecroticBurst';
import SpellPlagueSpit from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellPlagueSpit';
import SpellFetidSpit from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellFetidSpit';
import SpellBodySlam from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellBodySlam';
import SpellInhale from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellInhale';
import SpellCorpseBreath from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellCorpseBreath';
import SpellOmenofDeath from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellOmenofDeath';
import SpellMalevolence from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellMalevolence';
import SpellRitualofBones from '../../src/WoWGuides/Dungeons/ShadowoonBurialGrounds/Spells/SpellRitualofBones';

const ShadowmoonBurialGrounds: FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Shadowmoon Burial Grounds</title>
        </Head>

        <Dungeon>Shadowmoon Burial Grounds</Dungeon>

        <GettingThere>Shadowmoon Valley, Draenor. Head to the east.</GettingThere>

        <Section>
            <SectionTitle>Trash Before Sadana Bloodfury</SectionTitle>

            <p>After the first 3 mobs, both left and right share the same difficulty.</p>

            <Tips>
                <Rupt>
                    Shadowmoon Bone-Mender = most dangerous caster. Rupt the heal <SpellShadowMend /> at all costs.
                    Stop as many <SpellShadowBolt />s as possible.
                </Rupt>
                <Tip>Reanimated Ritual Bones mostly do tank damage with auto-attacks and <SpellVoidSlash />.</Tip>
                <Tip>
                    Beware of Void Spawn and <SpellVoidPulse />. Cannot out-range the AoE, but can LoS.
                    Sidestep <SpellVoidEruptions /> on the ground projectiles.
                </Tip>
                <Tip>When Defiled Spirit teleports behind you, sidestep <SpellCryofAnguish />.</Tip>
                <Tip>
                    Shadowmoon Loyalist just auto attacks. Occasionally cast <SpellSinisterFocus /> buff, use Purge.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Sadana Bloodfury</BossTitle>

            <Tips>
                <Tip>Avoid <SpellDaggerfall /> at all costs.</Tip>
                <Tip>Use defensive during <SpellWhispersoftheDarkStar /> channel cast, AoE damage to everyone.</Tip>
                <Tip>
                    When Sadana Bloodfury spawns a spirit through <SpellDarkCommunion />, focus it. Stun, Slow,
                    Immobilize, and Knockback Effects work. If boss devours the spirit, heals her for 10% and gives
                    20% extra damage for 20 sec.
                </Tip>
                <Tip>
                    When Sadana Bloodfury casts <SpellDarkEclipse />, enter in one of the <SpellLunarPurity /> runes
                    on the ground (inner circle) to reduce damage by 80%. Not doing so might be lethal.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Beware of <SpellDeathspike /> from the boss, use mitigation.</Tank>
                <Tank>Keep a good sitance from the spirit spawning from <SpellDarkCommunion />.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Use healing cooldowns against <SpellWhispersoftheDarkStar />.</Healer>
                <Healer>Top up party after <SpellDarkEclipse />.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Nhallish</SectionTitle>

            <p>Continue straight into Whispering Hollows. Most challenging trahs mobs.</p>

            <Tips>
                <Rupt>
                    Shadowmoon Dominator has <SpellDomination />, a charm effect. Stop it or use Shaman&apos;s
                    <SpellTremorTotem /> to neglate the effect. Rupt <SpellRendingVoidlash /> asap.
                </Rupt>
                <Tip>
                    Subjugated Soul is harmless, only auto-attacks to tank.
                </Tip>
                <Rupt>
                    Shadowmoon Exhumer spawns 2 Exhumed Spirits. Rupt Exhumer&apos;s <SpellVoidBolt /> (high single
                    target damage). Use Purge/Dispel to remove shield from Exhumed Spirits, followed by stopping their
                    <SpellDeathBlast /> cast.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Nhallish</BossTitle>

            <p>Shadowy tombs on the ground spawn Exhumed Spirits. Avoid at all costs, especially during boss fight.</p>

            <Tips>
                <Tip>
                    When boss casts <SpellPlanarShift />, use move speed abilities to get away from <SpellVoidVortex />.
                </Tip>
                <Tip>
                    During <SpellSoulSteal /> phase of Nhallish, defeat your soul to get <SpellReturnedSoul /> buff for
                    20 sec. The longer you take, the more damage you take from <SpellSoulShred />.
                </Tip>
                <Tip>Avoid the shadow ground projectiles coming from <SpellVoidDevastation />.</Tip>
            </Tips>

            <TankTips>
                <Tank>Aim the <SpellVoidBlast /> frontal away from your team.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>Top up party when the <SpellSoulSteal /> phase is over.</Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Bonemaw</SectionTitle>

            <p>Already familiar Shadowmoon Dominator, Shadowmoon Exhumer.</p>

            <Tips>
                <Rupt>
                    Rupt <SpellNecroticBurst /> from Monstrous Corpse Spider, the damage-over-time Disease effect
                    will go on everyone from the party.
                </Rupt>
                <Rupt>
                    Beware of Plagued Bat and its <SpellPlagueSpit />, use rupts.
                </Rupt>
                <Tip>
                    Closer to the bridge, there will be 2 Carrion Worms, at each end of the bridge. Both disappear at
                    20% health, they will cast uninterruptible spell <SpellFetidSpit /> on random targets, and have a
                    frontal <SpellBodySlam />.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Bonemaw</BossTitle>

            <p>2 Carrion Worms will spawn. Ignore them and finish the boss, or switch to them.</p>

            <Tips>
                <Tip>Avoid Bonemax&apos;s <SpellBodySlam />.</Tip>
                <Tip>
                    When boss casts <SpellInhale />, stay under <SpellCorpseBreath /> ground puddles. They prevent you
                    from being pulled towards Bonemaw. If you get caught, damage + spit off the platform.
                </Tip>
                <Tip>
                    Cleave Bonemaw and Carrion Worms if possible.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Make sure you are healthy when boss casts <SpellFetidSpit /> on you.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Top up party once they stay in <SpellCorpseBreath /> when <SpellInhale /> is happening.
                    Spot-heal someone who gets caught.
                </Healer>
            </HealerTips>
        </BossSection>

        <BossSection>
            <BossTitle>Ner&apos;zhul</BossTitle>

            <p>
                2 pack of mobs before boss. One with Plagued Bat and Monstrous Corpse Spider,
                second one with 2 Void Spawns.
            </p>

            <Tips>
                <Tip>
                    Run away from <SpellOmenofDeath /> spawn. Damage varies from proximity of your position. Go aways
                    on the furthest target, so bait it near the edge of the area.
                </Tip>
                <Tip>Dodge the <SpellMalevolence /> frontal cast.</Tip>
                <Tip>
                    Pre-assign one skeleton before <SpellRitualofBones />, you will save time and avoir confusion.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Move Ner&apos;zhul away from <SpellOmenofDeath /> ground eruption.
                </Tank>
                <Tank>During <SpellRitualofBones />, move boss to pre-assigned skeleton. Enables cleave.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>During <SpellOmenofDeath />, top up party members.</Healer>
                <Healer>
                    If a player crosses the threshold of <SpellRitualofBones />, they will take heavy ticking
                    damage-over-time effect, heal to prevent them from dying.
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default ShadowmoonBurialGrounds;
