import type { PostProcess } from "../PostProcesses/postProcess";

/**
 * Interface for defining prepass effects in the prepass post-process pipeline
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface PrePassEffectConfiguration {
    /**
     * Name of the effect
     */
    name: string;
    /**
     * Post process to attach for this effect
     */
    postProcess?: PostProcess;
    /**
     * Textures required in the MRT
     */
    texturesRequired: number[];
    /**
     * Is the effect enabled
     */
    enabled: boolean;
    /**
     * Does the output of this prepass need to go through imageprocessing
     */
    needsImageProcessing?: boolean;
    /**
     * Disposes the effect configuration
     */
    dispose?: () => void;
    /**
     * Creates the associated post process
     */
    createPostProcess?: () => PostProcess;
}
