/*eslint-disable */
import { v4 } from 'uuid';

export const POSTS = [
  {
    postId: 'INTRO',
    content: {
      title: `Somewhere between a tweet and a blog exists vignettes`,
      body: `<p>A vignette is an ephemeral post. It's meant to exist for a few moments and then it disappears.</p>
        
        <p>You must interact with your computer or mobile device to read a vignette. The longer your interaction, the longer the message is revealed.</p>`
    }
  },
  {
    postId: v4(),
    content: {
      title: `There's a hidden message here`,
      body: `<p>
        Some things are meant to be ephemeral. This is getting harder and
        harder to realize in our modern, digital age.
      </p>`
    }
  }
];

/*eslint-enable */
