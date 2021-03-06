import { linkRelationships } from './'

describe('linkRelationships', () => {
  it('Should link single relationship to included data', () => {
    expect(linkRelationships({
      relationships: {
        waifu: {
          data: {
            id: '3',
            type: 'characters'
          }
        }
      }
    },
    [
      {
        id: '3',
        type: 'characters',
        attributes: {
          name: 'Maki'
        }
      }
    ])).resolves.toEqual({
      waifu: {
        id: '3',
        name: 'Maki',
        type: 'characters'
      }
    })
  })

  it('Should link a relationship collection to included data', () => {
    expect(linkRelationships({
      relationships: {
        favorites: {
          data: [
            {
              id: '1',
              type: 'favorites'
            },
            {
              id: '2',
              type: 'favorites'
            }
          ]
        }
      }
    },
    [
      {
        id: '1',
        type: 'favorites',
        attributes: {
          favRank: 1
        }
      },
      {
        id: '2',
        type: 'favorites',
        attributes: {
          favRank: 1
        }
      }
    ])).resolves.toEqual({
      favorites: [
        {
          id: '1',
          favRank: 1,
          type: 'favorites'
        },
        {
          id: '2',
          favRank: 1,
          type: 'favorites'
        }
      ]
    })
  })
})
