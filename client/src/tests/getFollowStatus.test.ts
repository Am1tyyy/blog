import { friendStatus } from '../components/people/peopleItem/peopleItem.type';
import { whoAmIResponseType } from '../generallType/generallType';
import { followStatus } from '../utils/getFollowStatus';

describe('followStatus', () => {
  it('returns FOLLOW when userData is null', () => {
    const human = { _id: 'human_id_1' };
    const userData = null;

    const result = followStatus(human as whoAmIResponseType, userData);

    expect(result).toBe(friendStatus.FOLLOW);
  });

  it('returns FOLLOW when human is not in any list of userData', () => {
    const human = { _id: 'human_id_1' };
    const userData: whoAmIResponseType = {
      _id: '',
      fullName: '',
      email: '',
      avatarUrl: '',
      friendListRequests: ['some_other_id'],
      friendsList: ['another_id'],
      friendListWaitingRequests: ['yet_another_id'],
      createdAt: new Date(),
      updatedAt: new Date(),
      like: [],
      dislike: [],
      chats: [],
    };

    const result = followStatus(human as whoAmIResponseType, userData);

    expect(result).toBe(friendStatus.FOLLOW);
  });

  it('returns UN_FOLLOW when human is in friendListRequests of userData', () => {
    const human = { _id: 'human_id_1' };
    const userData = {
      _id: '',
      fullName: '',
      email: '',
      avatarUrl: '',
      friendListRequests: ['human_id_1'],
      friendsList: [],
      friendListWaitingRequests: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      like: [],
      dislike: [],
      chats: [],
    };

    const result = followStatus(human as whoAmIResponseType, userData);

    expect(result).toBe(friendStatus.UN_FOLLOW);
  });
});
