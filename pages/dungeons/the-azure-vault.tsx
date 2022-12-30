import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Dungeon from '../../src/WoWGuides/Dungeons/Components/Dungeon';
import Layout from '../../src/Shared/Layout/Component/Layout';
import GettingThere from '../../src/WoWGuides/GettingThere/Components/GettingThere';
import CheckpointsList from '../../src/WoWGuides/Checkpoints/Components/CheckpointsList';
import Checkpoint from '../../src/WoWGuides/Checkpoints/Components/Checkpoint';
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
import NpcLeymor from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcLeymor';
import NpcAzureblade from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcAzureblade';
import NpcUmbrelskul from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcUmbrelskul';
import NpcBookofTranslocation from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcBookofTranslocation';
import SpellScornfulHaste from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellScornfulHaste';
import SpellViscousToads from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellViscousToads';
import SpellSluggishAdoration from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellSluggishAdoration';
import SpellShrinkingForm from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellShrinkingForm';
import SpellHardeningScales from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellHardeningScales';
import NpcShriekingWhelp from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcShriekingWhelp';
import SpellShriek from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellShriek';
import NpcCrystalFury from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcCrystalFury';
import NpcCrystalThrasher from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcCrystalThrasher';
import SpellPiercingShards from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellPiercingShards';
import SpellCrystallineRupture from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellCrystallineRupture';
import SpellSplinteringShards from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellSplinteringShards';
import NpcConjuredLasher from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcConjuredLasher';
import SpellMysticVapors from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellMysticVapors';
import NpcArcaneTender from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcArcaneTender';
import SpellWildEruption from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellWildEruption';
import SpellInfusedGround from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellInfusedGround';
import SpellErraticGrowth from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellErraticGrowth';
import SpellLeyLineSprouts from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellLeyLineSprouts';
import SpellExplosiveBrand from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellExplosiveBrand';
import SpellConsumingStomp from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellConsumingStomp';
import SpellArcanePower from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellArcanePower';
import SpellVolatileSapling from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellVolatileSapling';
import SpellStingingSap from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellStingingSap';
import SpellInfusedStrike from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellInfusedStrike';
import SpellEruptingFissure from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellEruptingFissure';
import SpellArcaneBolt from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellArcaneBolt';
import NpcArcaneElemental from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcArcaneElemental';
import SpellWakingBane from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellWakingBane';
import SpellForbiddenKnowledge from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellForbiddenKnowledge';
import NpcUnstableCurator from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcUnstableCurator';
import SpellHeavyTome from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellHeavyTome';
import NpcRuneSealkeeper from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcRuneSealkeeper';
import SpellCondensedFrost from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellCondensedFrost';
import SpellIcyBindings from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellIcyBindings';
import NpcArcaneConstruct from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcArcaneConstruct';
import SpellArcaneBash from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellArcaneBash';
import SpellConjuredBarrier from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellConjuredBarrier';
import NpcAstralAttendant from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcAstralAttendant';
import SpellUnstablePower from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellUnstablePower';
import NpcVaultGuard from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcVaultGuard';
import SpellIceCutter from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellIceCutter';
import SpellBrilliantScales from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellBrilliantScales';
import NpcScalebaneLieutenant from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcScalebaneLieutenant';
import SpellMageHuntersFervor from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellMageHuntersFervor';
import SpellSummonDraconicImage from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellSummonDraconicImage';
import SpellAncientOrb from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellAncientOrb';
import SpellOverwhelmingEnergy from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellOverwhelmingEnergy';
import NpcDraconicIllusion from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcDraconicIllusion';
import SpellSealEmpowerment from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellSealEmpowerment';
import NpcDraconicImage from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcDraconicImage';
import SpellIllusionaryBolt from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellIllusionaryBolt';
import SpellUnstableMagic from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellUnstableMagic';
import SpellAncientOrbFragment from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellAncientOrbFragment';
import SpellArcaneCleave from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellArcaneCleave';
import NpcTelashGreywing from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcTelashGreywing';
import NpcDrakonidBreaker from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcDrakonidBreaker';
import SpellShoulderSlam from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellShoulderSlam';
import SpellNullStomp from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellNullStomp';
import NpcNullmagicHornswog from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcNullmagicHornswog';
import NpcTarasekLooter from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcTarasekLooter';
import SpellTearFlesh from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellTearFlesh';
import SpellBlessingofProtection from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellBlessingofProtection';
import SpellStoneform from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellStoneform';
import SpellAbsoluteZero from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellAbsoluteZero';
import SpellGlacialShield from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellGlacialShield';
import SpellVaultRune from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellVaultRune';
import SpellFrostBomb from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellFrostBomb';
import SpellFrozenGround from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellFrozenGround';
import SpellIcyDevastator from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellIcyDevastator';
import SpellShadowmeld from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellShadowmeld';
import SpellBrittle from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellBrittle';
import SpellOppressiveMiasma from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellOppressiveMiasma';
import NpcDetonatingCrystal from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcDetonatingCrystal';
import SpellFracture from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellFracture';
import NpcHardenedCrystal from '../../src/WoWGuides/Dungeons/TheAzureVault/Npcs/NpcHardenedCrystal';
import SpellCrystallize from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellCrystallize';
import SpellCrystallineRoar from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellCrystallineRoar';
import SpellArcaneEruption from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellArcaneEruption';
import SpellCracklingVortex from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellCracklingVortex';
import SpellDragonStrike from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellDragonStrike';
import SpellUnleashedDestruction from '../../src/WoWGuides/Dungeons/TheAzureVault/Spells/SpellUnleashedDestruction';

const TheAzureVault: FunctionComponent = () => (
    <Layout>
        <Head>
            <title>The Azure vault</title>
        </Head>

        <Dungeon>The Azure Vault</Dungeon>

        <GettingThere>Fly to The Azure Span. South East on tower.</GettingThere>

        <CheckpointsList>
            <p>After first boss, NPC at entrance.</p>
            <Checkpoint>Firs one after defeating <NpcLeymor /></Checkpoint>
            <Checkpoint>Second one after defeating <NpcAzureblade /></Checkpoint>
            <Checkpoint>Just before last boss,<NpcUmbrelskul /></Checkpoint>
        </CheckpointsList>

        <Section>
            <SectionTitle>Bonus Auras</SectionTitle>

            <p>
                When taking the first <NpcBookofTranslocation />, lasting one minute. Only active in the Upper Chamber.
            </p>

            <Tips>
                <Tip>
                    <SpellScornfulHaste /> gives 15% ti lates within 10 yards, but 30% to ennemies.
                    Do not let ennemies inside.
                </Tip>
                <Tip>
                    <SpellViscousToads /> = least valuable. Incapacitates ennemies every 10 seconds so good for CC.
                </Tip>
                <Tip>
                    <SpellSluggishAdoration /> slows ennemies ithin 10 yards by 25%
                </Tip>
                <Tip>
                    <SpellShrinkingForm /> increases move speed by 25% and damage taken by 5%.
                </Tip>
                <Tip>
                    <SpellHardeningScales /> reduces move speed by 25% and damage taken by 5%.
                </Tip>
            </Tips>
        </Section>

        <Section>
            <SectionTitle>Arcane Conservatory and Leymor</SectionTitle>

            <Tips>
                <Rupt>
                    Not stopping <NpcShriekingWhelp />&apos;s <SpellShriek /> will activate 2 powerful mobs.
                    <NpcCrystalFury /> and <NpcCrystalThrasher />. Can walk around the mob.
                </Rupt>
                <Tip>
                    <NpcCrystalFury /> has <SpellPiercingShards /> frontal, with stackable DoT. Avoid at all cost.
                </Tip>
                <Tip>
                    Walk out of melee to avoid <NpcCrystalThrasher />&apos;s <SpellCrystallineRupture />, massive damage
                    plus root. Periodically casts <SpellSplinteringShards /> on random player. Unavoidable damage,
                    use defensives. Stay far away not to overlap circles and take even more damage.
                </Tip>
                <Rupt>
                    Rupt <NpcConjuredLasher />&apos;<SpellMysticVapors />. Stun effects work (will not recast).
                    DoT stacks so multiple <SpellMysticVapors /> going through could be lethal.
                </Rupt>
                <Rupt>
                    Defeat all 3 <NpcArcaneTender /> to activate <NpcLeymor />. <SpellWildEruption /> is a projectile,
                    leaving <SpellInfusedGround /> that you must not step in. Rupt <SpellErraticGrowth />. Dispell the
                    stun if it goes through.
                </Rupt>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Leymor</BossTitle>

            <p>Activates after defeating the 3 <NpcArcaneTender /></p>

            <Tips>
                <Tip>
                    Clear <SpellLeyLineSprouts /> with <SpellExplosiveBrand />. Initial slam pushes you back.
                </Tip>
                <Tip>
                    Use defensives against <SpellConsumingStomp />. The more sprouts there are, the more damage, due
                    to <SpellArcanePower />.
                </Tip>
                <Tip>
                    Clearing <SpellLeyLineSprouts /> spawns <SpellVolatileSapling />, not dealing much melee damage
                    but which explode, and <SpellStingingSap /> deals massive damage. Avoid at all costs.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Beware of <SpellInfusedStrike />, use active mitigation.
                </Tank>
                <Tank>
                    <SpellEruptingFissure /> is a frontal that helps clear the <SpellLeyLineSprouts />.
                    Position the boss to cleave Sprouts without cleaving party members.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Watch out for <SpellExplosiveBrand />, top up people quickly after it.
                </Healer>
                <Healer>
                    Use healing cooldowns if too many <SpellLeyLineSprouts /> remain.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Azureblade</SectionTitle>

            <p>Circles on the ground polymorph you for 20 sec. Small grace preiod to step out. Dispellable.</p>

            <Tips>
                <Rupt>
                    Rupt <SpellArcaneBolt /> from <NpcArcaneElemental />, save one for <SpellWakingBane />,
                    dispellable sleep.
                </Rupt>
                <Rupt>
                    Sidestep <SpellForbiddenKnowledge /> from <NpcUnstableCurator />. Will disorient. Spare interrupts
                    for <SpellHeavyTome /> single-target cast.
                </Rupt>
                <Rupt>
                    <NpcRuneSealkeeper /> = dangerous caster. Rupt <SpellCondensedFrost /> and <SpellIcyBindings />.
                    <SpellIcyBindings />&apos; root can be cleared.
                </Rupt>
                <Tip>
                    <NpcArcaneConstruct /> periodically casts <SpellArcaneBash />, knocking you off the platform if
                    close to the edge. Stay in the middle. <SpellConjuredBarrier /> can just be burned trhough it.
                </Tip>
                <Tip>
                    Beware of <NpcAstralAttendant />&apos;s <SpellUnstablePower />, could be lethal if rooted.
                </Tip>
                <Tip>
                    <NpcVaultGuard /> = tank buster. Use mitigation against <SpellIceCutter />. Periodically casts
                    <SpellBrilliantScales />, making it more resistant to magic damage. Use Purge to remove.
                </Tip>
                <Tip>
                    <NpcScalebaneLieutenant /> = tank buster with <SpellIceCutter />. Also have
                    <SpellMageHuntersFervor /> aura, increasing damage by nearby ennemies by 25%. Focus it first.
                    Periodically casts <SpellBrilliantScales />, use Purge.
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Azureblade</BossTitle>

            <p>
                2 phases. First one with <SpellSummonDraconicImage /> and <SpellAncientOrb />.
                Second one with <SpellOverwhelmingEnergy /> paired with <NpcDraconicIllusion />. Killing all 4
                <NpcDraconicIllusion /> will stop <SpellSealEmpowerment /> and resume phase 1.
            </p>

            <Tips>
                <Rupt>
                    Every <SpellSummonDraconicImage />, focus <NpcDraconicImage />. Rupt <SpellIllusionaryBolt />.
                    Stuns work too. Sidestep <SpellUnstableMagic /> upon defeating the <NpcDraconicImage />.
                </Rupt>
                <Tip>Sidestep the <SpellAncientOrb />.</Tip>
                <Tip>
                    During <SpellOverwhelmingEnergy />, sidestep <SpellAncientOrbFragment /> coming your way.
                </Tip>
                <Tip>
                    Focus <NpcDraconicIllusion /> adds during second phase. Use personal defensives. Sidestep the
                    ground animation <SpellUnstableMagic /> upon defeating the <NpcDraconicIllusion />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Care how you position <NpcAzureblade /> because of <SpellArcaneCleave />. 10 yard frontal.
                </Tank>
                <Tank>
                    Position boss next to <NpcDraconicImage /> to allow cleave.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    The <SpellOverwhelmingEnergy /> phase is the good time for cooldowns.
                </Healer>
            </HealerTips>
        </BossSection>

        <Section>
            <SectionTitle>Trash Before Telash Greywing</SectionTitle>

            <p>
                Head down to the cave towards <NpcTelashGreywing />. Sidestep circles on the ground.
            </p>

            <Tips>
                <Tip>
                    <NpcDrakonidBreaker /> charge a random player with <SpellShoulderSlam />. Knockback effect.
                </Tip>
                <Tip>
                    Avoid <SpellNullStomp /> ground animation from <NpcNullmagicHornswog />. Knocks back upon contact.
                </Tip>
                <Tip>
                    <NpcTarasekLooter /> casts <SpellTearFlesh />, direct damage with bleed effet on highest threat
                    target -tank). Stacks, but can be cleared with <SpellBlessingofProtection />, <SpellStoneform />...
                </Tip>
            </Tips>
        </Section>

        <BossSection>
            <BossTitle>Telash Greywing</BossTitle>

            <p>
                Intermission phase with <SpellAbsoluteZero />, at 100 Energy.
                Shields himself with <SpellGlacialShield /> and spawns a <SpellVaultRune />.
                Stay under the <SpellVaultRune /> by the end of <SpellAbsoluteZero /> to survive.
                <SpellVaultRune /> becomes inactive after protecting players.
            </p>

            <p>
                At the beginning, <NpcTelashGreywing /> has 60 Energy. Starts at 0 after <SpellAbsoluteZero />.
                Takes 50 seconds if he starts from 0.
            </p>

            <Tips>
                <Tip>
                    Periodically casts <SpellFrostBomb /> on everyone, followed by <SpellFrozenGround /> upon
                    expiration. Do not overlap each other and spread. Put the bomb close, due to <SpellFrozenGround />.
                </Tip>
                <Tip>
                    <NpcTelashGreywing /> casts <SpellIcyDevastator /> on a random player. Use defensive and immunities.
                    Abilities that reset combat neglect the mechanic. Such as <SpellShadowmeld />.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>
                    Tank close to <SpellFrozenGround /> puddles to reduce downtime of DPS, for better space management.
                </Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Top up party after <SpellAbsoluteZero /> if needed.
                </Healer>
                <Healer>
                    Spot-heal the person that gets <SpellIcyDevastator />.
                </Healer>
            </HealerTips>
        </BossSection>

        <BossSection>
            <BossTitle>Umbrelskul</BossTitle>

            <p>3 intermissions at 75%, 50%, and 25%, where he will become <SpellBrittle />.</p>

            <Tips>
                <Tip>
                    <SpellOppressiveMiasma /> The more you move, the slower you become. Curse can be dispelled or
                    magical-immunity work.
                </Tip>
                <Tip>
                    Once boss enters <SpellBrittle /> intermission, focus <NpcDetonatingCrystal />. Highest priority.
                    Prevents applying group-wide damage-over-time called <SpellFracture />. Boss marks one of the
                    <NpcDetonatingCrystal /> as a <NpcHardenedCrystal /> with a <SpellCrystallize /> absorb barrier.
                </Tip>
                <Tip>Aoid being hit by <SpellCrystallineRoar /> at all costs.</Tip>
                <Tip>
                    Dodge ground effect from <SpellArcaneEruption /> cast. Will create a lingering
                    <SpellCracklingVortex /> effect that will damage you if you stand in it.
                </Tip>
            </Tips>

            <TankTips>
                <Tank>Use active mitigation against <SpellDragonStrike />.</Tank>
                <Tank>Move boss closer to <NpcDetonatingCrystal /> for cleave.</Tank>
            </TankTips>

            <HealerTips>
                <Healer>
                    Dispel the tank&apos;s DoT from <SpellDragonStrike />.
                </Healer>
                <Healer>
                    If <SpellFracture /> goes through, use major healing cooldowns to try to recover.
                </Healer>
                <Healer>
                    Occasionally casts <SpellUnleashedDestruction />, damaging everyone. Top them up.
                </Healer>
            </HealerTips>
        </BossSection>
    </Layout>
);

export default TheAzureVault;
