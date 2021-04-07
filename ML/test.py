from gector.predict import *

if __name__ == '__main__':
    # read parameters
    parser = argparse.ArgumentParser()
    parser.add_argument('--model_path',
                        help='Path to the model file.', nargs='+',
                        default="./gector/roberta_1_gector.th"
                        )
    parser.add_argument('--vocab_path',
                        help='Path to the model file.',
                        default='./gector/data/output_vocabulary'  # to use pretrained models
                        )
    parser.add_argument('--input_file',
                        help='Path to the evalset file',
                        default="./gector/input.txt"
                        )
    parser.add_argument('--output_file',
                        help='Path to the output file',
                        default="./gector/output.txt")
    parser.add_argument('--max_len',
                        type=int,
                        help='The max sentence length'
                             '(all longer will be truncated)',
                        default=50)
    parser.add_argument('--min_len',
                        type=int,
                        help='The minimum sentence length'
                             '(all longer will be returned w/o changes)',
                        default=3)
    parser.add_argument('--batch_size',
                        type=int,
                        help='The size of hidden unit cell.',
                        default=128)
    parser.add_argument('--lowercase_tokens',
                        type=int,
                        help='Whether to lowercase tokens.',
                        default=0)
    parser.add_argument('--transformer_model',
                        choices=['bert', 'gpt2', 'transformerxl', 'xlnet', 'distilbert', 'roberta', 'albert'],
                        help='Name of the transformer model.',
                        default='roberta')
    parser.add_argument('--iteration_count',
                        type=int,
                        help='The number of iterations of the model.',
                        default=5)
    parser.add_argument('--additional_confidence',
                        type=float,
                        help='How many probability to add to $KEEP token.',
                        default=0)
    parser.add_argument('--min_error_probability',
                        type=float,
                        help='Minimum probability for each action to apply. '
                             'Also, minimum error probability, as described in the paper.',
                        default=0.0)
    parser.add_argument('--special_tokens_fix',
                        type=int,
                        help='Whether to fix problem with [CLS], [SEP] tokens tokenization. '
                             'For reproducing reported results it should be 0 for BERT/XLNet and 1 for RoBERTa.',
                        default=1)
    parser.add_argument('--is_ensemble',
                        type=int,
                        help='Whether to do ensembling.',
                        default=0)
    parser.add_argument('--weights',
                        help='Used to calculate weighted average', nargs='+',
                        default=None)
    args = parser.parse_args()
    main(args)
