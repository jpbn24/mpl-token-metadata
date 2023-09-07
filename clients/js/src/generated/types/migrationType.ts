/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum MigrationType {
  CollectionV1,
  ProgrammableV1,
}

export type MigrationTypeArgs = MigrationType;

export function getMigrationTypeSerializer(): Serializer<
  MigrationTypeArgs,
  MigrationType
> {
  return scalarEnum<MigrationType>(MigrationType, {
    description: 'MigrationType',
  }) as Serializer<MigrationTypeArgs, MigrationType>;
}
