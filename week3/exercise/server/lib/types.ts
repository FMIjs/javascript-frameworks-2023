export interface BasicTODO {
    id: number;
    finished: boolean;
    description: string;
}

export interface TimedTODO extends BasicTODO {
    dateAndTime: Date;
}

export interface AdvancedTODO extends TimedTODO {
    location: string;
}

export type Todo = BasicTODO | TimedTODO | AdvancedTODO;

export type CreateBasicTODO = Partial<Omit<BasicTODO, 'id' | 'finished'>>
export type CreateTimedTODO = Partial<Omit<TimedTODO, 'id' | 'finished'>>
export type CreateAdvancedTODO = Partial<Omit<AdvancedTODO, 'id' | 'finished'>>
