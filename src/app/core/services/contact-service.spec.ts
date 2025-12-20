import { TestBed } from '@angular/core/testing';

import type { ContactDao } from '../models/contact';
import { DexieRepository } from '../repository/dexie-repository';
import { ContactService } from './contact-service';

describe('ContactService', () => {
  let service: ContactService;
  let bulkGetMock: jest.Mock;

  beforeEach(() => {
    bulkGetMock = jest.fn().mockResolvedValue([createContactDao('contact-1')]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DexieRepository,
          useValue: {
            contacts: { bulkGet: bulkGetMock },
          } as unknown as DexieRepository,
        },
      ],
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bulk fetch contacts via Dexie', async () => {
    const ids = new Set(['contact-1', 'contact-2']);

    const result = await service.getContactDaosByIdsAsync(ids);

    expect(bulkGetMock).toHaveBeenCalledWith(['contact-1', 'contact-2']);
    expect(result).toEqual([createContactDao('contact-1')]);
  });
});

const createContactDao = (id: string): ContactDao => ({
  id,
  leadId: 'lead-1',
  name: 'Jane Doe',
  createdAt: new Date('2024-01-01T00:00:00Z'),
});
