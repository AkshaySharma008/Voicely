import argparse
from gector.gec_model import GecBERTModel
from utils.helpers import read_lines

def predict_for_file(model, input_text, batch_size=32):
    test_data = [input_text]
    print(test_data)
    predictions = []
    cnt_corrections = 0
    batch = []
    for sent in test_data:
        batch.append(sent.split())
        if len(batch) == batch_size:
            preds, cnt = model.handle_batch(batch)
            predictions.extend(preds)
            cnt_corrections += cnt
            batch = []
    if batch:
        preds, cnt = model.handle_batch(batch)
        predictions.extend(preds)
        cnt_corrections += cnt

    # with open(output_file, 'w') as f:
    #     f.write("\n".join([" ".join(x) for x in predictions]) + '\n')
    ans = [" ".join(x) for x in predictions]

    out = ""
    for i in ans:
        if i != '':
            out += i
        else:
            out += " "

    return out


def main():
    model = GecBERTModel(vocab_path="./data/output_vocabulary",
                         model_paths=["roberta_1_gector.th"],
                         max_len=50, min_len=3,
                         iterations=5,
                         min_error_probability=0.0,
                         lowercase_tokens=0,
                         model_name="roberta",
                         special_tokens_fix=1,
                         log=False,
                         confidence=0,
                         is_ensemble=0,
                         weigths=None)
    return model
    # result = predict_for_file(model, input_text, batch_size=128)
    # return result
model = main()