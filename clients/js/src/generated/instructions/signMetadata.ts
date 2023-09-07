/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type SignMetadataInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Creator */
  creator: Signer;
};

// Data.
export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataSerializer(): Serializer<
  SignMetadataInstructionDataArgs,
  SignMetadataInstructionData
> {
  return mapSerializer<
    SignMetadataInstructionDataArgs,
    any,
    SignMetadataInstructionData
  >(
    struct<SignMetadataInstructionData>([['discriminator', u8()]], {
      description: 'SignMetadataInstructionData',
    }),
    (value) => ({ ...value, discriminator: 7 })
  ) as Serializer<SignMetadataInstructionDataArgs, SignMetadataInstructionData>;
}

// Instruction.
export function signMetadata(
  context: Pick<Context, 'programs'>,
  input: SignMetadataInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    creator: { index: 1, isWritable: false, value: input.creator ?? null },
  };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getSignMetadataInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
